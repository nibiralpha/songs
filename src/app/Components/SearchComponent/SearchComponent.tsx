import React, { useRef, useState } from "react";
import { Search, X } from "lucide-react";
import styles from "./Search.module.css";
import Select, { SingleValueProps } from "react-select";
import { components, DropdownIndicatorProps } from "react-select";
import { DeezerSearchResponse, SearchOption } from "@app-types/Search";
import { useRouter } from "next/navigation";
import { useNavigate } from "@Hooks/useNavigate";

export type SearchResultType = "track" | "album" | "artist" | "playlist";
interface SearchComponent {
  onChange?: (value: string) => void;
  data?: DeezerSearchResponse | undefined;
  result?: DeezerSearchResponse | undefined;
  loading?: boolean;
}

const SearchIcon = (props: DropdownIndicatorProps<SearchOption, false>) => (
  <components.DropdownIndicator {...props}>
    <Search size={18} />
  </components.DropdownIndicator>
);

export default function SearchComponent({
  onChange,
  result,
  data,
}: Readonly<SearchComponent>) {
  const navigate = useNavigate();

  const router = useRouter();
  const searchTimer: number = 1000;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [search, setSearch] = useState<string>("");
  // const [query, setQuery] = useState("");

  const onChangeKeyword = (value: string) => {
    setSearch(value);

    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      if (onChange) {
        onChange(value);
      }
    }, searchTimer);
  };

  const searchData = async (input: string) => {
    onChangeKeyword(input);
  };

  const options: SearchOption[] = [
    ...(result?.tracks?.map((item) => ({
      id: item.id,
      albumId: item?.album?.id,
      value: `${item.type}-${item.id}`,
      label: item?.title,
      image: item?.album?.cover_small,
      name: item?.title,
      type: "track" as const,
    })) ?? []),

    ...(result?.albums?.map((item) => ({
      id: item.id,
      value: `${item.type}-${item.id}`,
      label: item.title,
      image: item?.cover_medium,
      name: item?.artist?.name,
      type: "album" as const,
    })) ?? []),

    ...(result?.artists?.map((item) => ({
      id: item.id,
      value: `${item.type}-${item.id}`,
      label: item?.name,
      image: item?.picture_small,
      name: item?.name,
      type: "artist" as const,
    })) ?? []),

    // ...(result?.playlists?.map((item) => ({
    //   id: item.id,
    //   label: item.title,
    //   image: item?.artist?.picture_medium,
    //   artistName: item?.artist?.name,
    //   type: "playlist" as const,
    // })) ?? []),
  ];

  const changePage = (
    type: SearchResultType,
    id: number,
    albumId: number | undefined = undefined,
  ) => {
    if (type == "track") {
      navigate("/album/" + albumId + "/track/" + id);
    }

    if (type == "album") {
      navigate("/album/" + id);
    }

    if (type == "artist") {
      navigate("/artist/" + id);
    }
  };

  const SingleValue = ({ data }: SingleValueProps<SearchOption>) => {
    return (
      <div
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {data.label}
      </div>
    );
  };

  return (
    <div className="relative w-[250] max-w-md">
      <div
        className={`absolute pl-10 inset-y-0 left-0 flex items-center pl-3 pointer-events-none ${styles.search_icon}`}
      >
        <Search className="w-5 h-5 text-gray-400" />
      </div>

      <div className={styles.search_select}>
        <Select
          menuPortalTarget={
            typeof document !== "undefined" ? document.body : null
          }
          styles={{
            menuPortal: (base) => ({
              ...base,
              zIndex: 99,
            }),

            option: (base, state) => ({
              ...base,
              backgroundColor: state.isSelected
                ? "#2684ff"
                : state.isFocused
                  ? "#f0f0f0"
                  : "white",

              color: state.isSelected ? "white" : "black",
              cursor: "pointer",

              ":active": {
                backgroundColor: "#2684ff",
              },
            }),
          }}
          classNamePrefix="search"
          placeholder="Search..."
          instanceId="songs-search"
          openMenuOnFocus={true}
          isSearchable={true}
          options={options}
          onChange={(option) => {
            if (option) {
              if (option.type == "track") {
                changePage(option.type, option.id, option?.albumId);
                return
              }
              changePage(option.type, option.id);
            }
          }}
          onInputChange={(value, { action }) => {
            if (action === "input-change") {
              searchData(value);
            }

            return value;
          }}
          components={{
            DropdownIndicator: SearchIcon,
            IndicatorSeparator: null,
          }}
          formatOptionLabel={(option: SearchOption, { context }) => {
            if (context === "value") {
              return (
                <div
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {option.label}
                </div>
              );
            }

            return (
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <img
                  src={option.image ? option.image : "/no-img.png"}
                  width={40}
                  height={55}
                  style={{
                    objectFit: "cover",
                    borderRadius: 4,
                  }}
                  alt=""
                />

                <div className={styles.options}>
                  <div className={styles.text_background}>{option.label}</div>

                  {option.type === "album" && (
                    <small className={styles.text_background}>
                      {option.name}
                      <br />
                    </small>
                  )}

                  <small className={styles.text_background}>
                    {option.type}
                  </small>
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}

import React, { useRef, useState } from "react";
import { Search, X } from "lucide-react";
import styles from "./Search.module.css";
import Select from "react-select";
import { components, DropdownIndicatorProps } from "react-select";
import { DeezerSearchResponse, SearchOption } from "@app-types/Search";
import { useRouter } from "next/navigation";

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
    // ...(result?.tracks?.map((item) => ({
    //   id: item.id,
    //   label: item.title,
    //   image: item.album.cover_medium,
    //   artistName: item?.artist?.name,
    //   type: "track" as const,
    // })) ?? []),

    ...(result?.albums?.map((item) => ({
      id: item.id,
      label: item.title,
      image: item?.cover_medium,
      artistName: item?.artist?.name,
      type: "album" as const,
    })) ?? []),

    // ...(result?.artists?.map((item) => ({
    //   id: item.id,
    //   label: item?.artist?.name,
    //   image: item?.artist?.picture_medium,
    //   artistName: item?.artist?.name,
    //   type: "artist" as const,
    // })) ?? []),

    // ...(result?.playlists?.map((item) => ({
    //   id: item.id,
    //   label: item.title,
    //   image: item?.artist?.picture_medium,
    //   artistName: item?.artist?.name,
    //   type: "playlist" as const,
    // })) ?? []),
  ];

  console.log(options);
  

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
          }}
          classNamePrefix="search"
          placeholder="Search..."
          instanceId="songs-search"
          // inputValue={search}
          openMenuOnFocus={true}
          isSearchable={true}
          options={options}
          onInputChange={(value, { action }) => {
            if (action === "input-change") {
              searchData(value);
            }
            return value;
          }}
          onFocus={(event) => {
            searchData(search);
          }}
          components={{
            DropdownIndicator: SearchIcon,
            IndicatorSeparator: null,
          }}
          formatOptionLabel={(option: SearchOption) => {
            return (
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                }}
                // onClick={() => changePage(option.type, option.value)}
              >
                {/* {console.log("zzzzzzzzzzzzz",result, option.image, option.value, option.label, option.type)} */}
                <img
                  src={option.image ? option?.image : "/no-img.png"}
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
                  <small className={styles.text_background}>
                    {option?.artistName}
                  </small> <br />
                  <small className={styles.text_background}>
                    {option.type}
                  </small>
                </div>
              </div>
            );
          }}
        />
      </div>

      {/* {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute inset-y-0 right-0 flex items-center pr-[10px] hover:text-gray-600 text-gray-400 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )} */}
    </div>
  );
}

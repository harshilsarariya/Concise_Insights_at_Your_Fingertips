"use client";
import { useEffect, useState } from "react";
import Heading from "../ui/heading";
import { Input, Skeleton } from "antd";
import { getSummary } from "../lib/action";

const { Search } = Input;

export default function Page() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");

  const fetchData = async () => {
    setLoading(true);
    const data = await getSummary(query);
    setSummary(data.summarize_topic);
    setLoading(false);
  };

  return (
    <main className="m-5">
      <Heading title="Write any topic" className="my-5  text-lg" />
      <Search
        placeholder="input search text"
        allowClear
        size="large"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onSearch={fetchData}
      />
      <div className="mt-3">
        {!loading && (
          <div className="p-2 bg-gray-100 rounded-lg">
            <p>{summary}</p>
          </div>
        )}
        {loading && (
          <div>
            <Skeleton active />
          </div>
        )}
      </div>
    </main>
  );
}

"use client";
import { useState } from "react";
import Heading from "../ui/heading";
import { Input, Skeleton } from "antd";

const { Search } = Input;

export default function Page() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <main className="m-5">
      <Heading title="Write any topic" className="my-5  text-lg" />
      <Search
        placeholder="input search text"
        allowClear
        size="large"
        onSearch={(value) => setQuery(value)}
      />
      <div className="mt-3">
        {!loading && (
          <div className="p-2 bg-gray-100 rounded-lg">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              reiciendis non nam corrupti totam quaerat animi possimus cum ad
              hic!
            </p>
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

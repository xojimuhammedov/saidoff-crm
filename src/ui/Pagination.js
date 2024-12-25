import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Pagination({ length }) {
  const searchParams = useSearchParams();
  const [page, setPage] = useState(0);

  useEffect(() => {}, []);
}

export default Pagination;

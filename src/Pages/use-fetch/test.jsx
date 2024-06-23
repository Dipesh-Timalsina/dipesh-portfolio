import { useState } from "react"
import useFetch from ".";



export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

    return (
      <>
        <div className="layout">
          <div className="topsection">
            <div style={{ background: "#fff" }}>
              <h1>Use Fetch Hook</h1>
              {pending ? <h3>Pending !! Please wait</h3> : null}
              {error ? <h3>{error}</h3> : null}
              {data && data.products && data.products.length
                ? data.products.map((productItem) => (
                    <p key={productItem.key}>{productItem.title}</p>
                  ))
                : null}
            </div>
          </div>
          <div className="learnings">
            <h1>Learnings</h1>
            <ol>
              <li>
                Created a custom hook useFetch to handle data fetching from an
                API endpoint. Custom hooks allow for reuse of logic across
                components.
              </li>

              <li>
                Implemented fetchData function to initiate data fetching using
                fetch(url, options). It handles response validation
                (response.ok) and parses the JSON response (response.json()).
              </li>
              <li>
                Used useEffect with a dependency array ([url]) to trigger data
                fetching whenever the url changes. This ensures that fetching is
                initiated whenever the component using useFetch mounts or the
                url prop updates.
              </li>
            </ol>
          </div>
        </div>
      </>
    );
}
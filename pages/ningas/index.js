import Link from "next/link";
export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  return { props: { ningas: data } };
}
import React from "react";

const Ningas = ({ ningas }) => {
  return (
    <>
      <h2>
        {" "}
        <Link href="./">Back to Home</Link>
      </h2>
      <h1>Ninga </h1>
      <h2 style={{ color: "red" }}>the name of fetching data</h2>
      <div className="parent">
        {ningas.map((x) => 
          
          <div className='box'  key={x.id}>
           <h2>{x.name}</h2> 
          </div>
          
          
        )}
      </div>
    </>
  );
};

export default Ningas;

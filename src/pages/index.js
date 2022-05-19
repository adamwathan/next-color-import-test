import Head from "next/head";
import Image from "next/image";
import colors from "../colors";

export default function Home() {
  return (
    <div>
      <div className="h-48 w-48 bg-red">{colors.red}</div>
      <div className="h-48 w-48 bg-green">{colors.green}</div>
    </div>
  );
}

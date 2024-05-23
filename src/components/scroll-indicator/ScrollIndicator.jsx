import { useEffect, useState } from "react";
import './styles.css';

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
      }
      setLoading(false);
    } catch (error) {
      setError("can not fetch products");
      setLoading(false);
    }
  }
  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
    console.log(scrollPercentage);
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => window.removeEventListener("scroll", () => {});
  });
  if (loading) {
    return <h1>Loading Products ... </h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <div className="top-container">
        <div className="scroll-progress-tracking-container">
          <div
            className="current-prgress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
        <h1>Custom Scroll Indicator</h1>
      </div>
      <div className="data-container"></div>
      {data.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}

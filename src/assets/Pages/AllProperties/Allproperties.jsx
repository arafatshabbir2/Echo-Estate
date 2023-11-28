import { useEffect, useState } from "react";
import Container from "../../../Utils/Container/Container";
import PropertyCard from "./PropertyCard";
import Loading from "../../../Components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/AxiosSecure/useAxiosSecure";
import SectionTitle from "../../../Utils/SectionTitle/SectionTitle";

const Allproperties = () => {
  const axiosSecure = useAxiosSecure();
  const [searchtext, setSearchText] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const {
    data: properties = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["properties", searchtext, priceSort, minPrice],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/getVerifiedProperties?search=${searchtext}&&priceSort=${priceSort}&&minPrice=${minPrice}&&maxPrice=${maxPrice}`
      );
      return res.data;
    },
  });
  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
    if (searchText) {
      setMinPrice("");
      setMaxPrice("");
    }
  };
  const handlePriceSort = (e) => {
    const sort = e.target.value;
    if (sort === "Low To High") {
      setPriceSort("asc");
      setMaxPrice("");
      setMinPrice("");
    } else if (sort === "High To Low") {
      setPriceSort("desc");
      setMinPrice("");
      setMaxPrice("");
    }
  };
  const handlePriceRange = (e) => {
    const priceRange = e.target.value;
    if (priceRange === "$50000-$100000") {
      setMinPrice(50000);
      setMaxPrice(100000);
    } else if (priceRange === "$100000-$200000") {
      setMinPrice(100000);
      setMaxPrice(200000);
    } else if (priceRange === "$200000-$400000") {
      setMinPrice(200000);
      setMaxPrice(400000);
    } else if (priceRange === "$400000-$600000") {
      setMinPrice(400000);
      setMaxPrice(600000);
    } else if (priceRange === "$600000-$800000") {
      setMinPrice(600000);
      setMaxPrice(800000);
    } else if (priceRange === "$800000-$900000") {
      setMinPrice(800000);
      setMaxPrice(900000);
    } else if (priceRange === "$900000-$1000000") {
      setMinPrice(900000);
      setMaxPrice(1000000);
    }
  };
  console.log(minPrice, maxPrice);
  return (
    <div className="mb-10 container mx-auto p-4">
      <SectionTitle
        title={"All Property"}
        subtitle={"Chose The Property You Like From Here.."}
      ></SectionTitle>
      <div className="lg:w-9/12 w-[90vw] mx-auto">
        <div className="join w-full">
          <div className="w-full">
            <div className="w-full">
              <input
                onChange={handleSearch}
                className="input md:w-full  font-semibold input-bordered border-main  rounded-full focus:border-main join-item"
                placeholder="Search by Title"
              />
            </div>
          </div>
          <select
            onChange={handlePriceSort}
            className="select select-bordered lg:w-auto w-[20vw] font-bold border-main focus:border-main rounded-full  join-item"
          >
            <option className="font-bold " disabled selected>
              Search By Price
            </option>
            <option>High To Low</option>
            <option>Low To High</option>
          </select>
          <select
            onChange={handlePriceRange}
            className="select select-bordered lg:w-auto w-[20vw] font-bold border-main focus:border-main rounded-full  join-item"
          >
            <option className="font-bold " disabled selected>
              Search By Price Range
            </option>
            <option>$50000-$100000</option>
            <option>$100000-$200000</option>
            <option>$200000-$400000</option>
            <option>$400000-$600000</option>
            <option>$600000-$800000</option>
            <option>$800000-$900000</option>
            <option>$900000-$1000000</option>
          </select>
        </div>
      </div>
      {isLoading && <Loading></Loading>}
      <Container>
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 xl:grid-cols-3 gap-8 my-10 mt-12">
          {properties?.map((property) => (
            <PropertyCard property={property} key={property._id}></PropertyCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Allproperties;

import { CountryDetails } from "@/details/detail";
//import Link from "next/link";

function CountryName({ params }: { params: { country_name: string } }) {

  const CountryDetails : CountryDetails[] = [
   {
    name: "Pakistan",
    population: 88092400374,
    capital: "Islamabad",
  },
   {
    name: "Russia",
    population: 53871362115,
    capital: "Moscow",
  },
   {
    name: "America",
    population: 124494116876,
    capital: "Washington, D.C",
  },
   {
    name: "Turkey",
    population: 31736367294,
    capital: "Ankara",
  },
   {
    name: "India",
    population: 1450935791,
    capital: "New Delhi",
  }
]
 }

export default CountryName
import React, { useState } from "react";
import { Box, Select, FormControl, FormLabel, VStack, Text } from "@chakra-ui/react";

const countriesData = {
  USA: {
    currency: "USD",
    states: {
      California: ["Los Angeles", "San Francisco", "San Diego"],
      Texas: ["Houston", "Dallas", "Austin"],
    },
  },
  Canada: {
    currency: "CAD",
    states: {
      Ontario: ["Toronto", "Ottawa", "Mississauga"],
      Quebec: ["Montreal", "Quebec City", "Laval"],
    },
  },
  // Add more countries, states, and cities as needed
};

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [currency, setCurrency] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setCurrency(countriesData[country].currency);
    setStates(Object.keys(countriesData[country].states));
    setSelectedState("");
    setCities([]);
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setCities(countriesData[selectedCountry].states[state]);
  };

  return (
    <VStack spacing={4} align="stretch">
      <FormControl id="country-selector">
        <FormLabel>Country</FormLabel>
        <Select placeholder="Select country" onChange={handleCountryChange}>
          {Object.keys(countriesData).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Select>
      </FormControl>

      {currency && <Text>Currency: {currency}</Text>}

      {states.length > 0 && (
        <FormControl id="state-selector">
          <FormLabel>State</FormLabel>
          <Select placeholder="Select state" onChange={handleStateChange}>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>
        </FormControl>
      )}

      {cities.length > 0 && (
        <FormControl id="city-selector">
          <FormLabel>City</FormLabel>
          <Select placeholder="Select city">
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </Select>
        </FormControl>
      )}
    </VStack>
  );
};

export default Index;

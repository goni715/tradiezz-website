const formatExperience = (exp: string) => {
  const expMap: { [key: string]: string } = {
    apprentice: "Apprentice",
    newly_qualified: "Newly Qualified",
    "1_3_years": "1-3 Years",
    "3_5_years": "3-5 Years",
    "5_years_plus": "5+ Years",
    n_a: "N/A",
  }
  return expMap[exp] || exp
}

export default formatExperience;
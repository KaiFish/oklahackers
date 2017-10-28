import React from 'react';
import Link from 'gatsby-link';

const include = [
  "MAR","DZA", "ZAF", "MUS", "TUN", "CPV", "ETH", "SYC", "NGA", "MDG",
  "COD", "LBY", "GMB", "KEN", "GHA", "TZA", "MLI", "SDN", "SOM", "CIV",
  "ZWE", "SEN", "CMR", "ERI", "UGA", "NAM", "REU", "MOZ", "AGO", "GAB",
  "BFA", "RWA", "GIN", "TCD", "SSD", "MRT", "BWA", "NER", "DJI", "ZMB",
  "SLE", "MWI", "LBR", "TGO", "BEN", "BDI", "SWZ", "COG", "LSO", "GNQ",
  "STP", "EGY", "SOM", "CAF", "SOL", "ESH", "GNB"
]

const IndexPage = () => (
  <div>
    <h1>Oklahackers</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

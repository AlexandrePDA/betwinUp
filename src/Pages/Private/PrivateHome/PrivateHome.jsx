import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import { db } from "../../../firebase-config";
import { getDocs, collection } from 'firebase/firestore';
import Footer from '../../../Components/Footer';

const PrivateHome = () => {

  const [searchValue, setSearchValue] = useState("");

  const handleForm = () => {
    console.log(searchValue);
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  }

  // gere le get des cards présentes dans db
  const [cardList, setCardList] = useState([]);
  const [filter, setFilter] = useState("");
  const cardsCollectionRef = collection(db, "cards");

  const getCardList = async () => {
    // READ DATA FROM DB*
    try {
      const data = await getDocs(cardsCollectionRef);
      const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id, }));
      setCardList(filteredData);

    } catch (error) {
      console.error(error);
    }

  };

  useEffect(() => {

    getCardList();



  }, [cardList])



  // try
  const handleFilterChange = async e => {
    const selectedOption = e.target.value;
    setFilter(selectedOption);
    console.log("Option choisis : ", selectedOption);
  }

  const options = ["Langue", "Programmation", "Art", "Rédaction"];


  return (

    <>
      <div className="bg-dark-purple">
        <section className="bg-dark-purple w-screen h-screen mx-auto max-w-screen-xl">


          {/* navigation */}
          <div className="flex items-center ml-3 py-4 overflow-x-auto whitespace-nowrap">
            <a href="/" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>

            <span className="mx-5 text-white rtl:-scale-x-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </span>

            <a href="/private/private-home" className="text-white hover:underline">
              Profils
            </a>


          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="mt-8 text-white text-2xl text-center px-8 lg:px-0">Partagez vos compétences en trouvant le bon profil 🚀</h1>
            <div className="flex flex-col md:flex-row items-center gap-2 max-w-screen-lg mt-8">
              <p className="text-white">Filtrez </p>
              <select onChange={handleFilterChange} className="mt-1 w-full text-gray-800 p-1 rounded-md  shadow-sm" required name="competences" id="competences">
                <option value="">Selectionnez </option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>

            </div>
            <div className="flex flex-col md:flex-row flex-wrap  w-full mx-auto max-w-screen-xl">

              {cardList.map((value, index) => (
                <Cards key={index} value={value} />
              ))}
            </div>

          </div>
        </section>
      <Footer/>
      </div>




    </>
  )
}

export default PrivateHome;
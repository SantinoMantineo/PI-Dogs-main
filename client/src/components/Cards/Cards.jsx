import React, { useState } from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { dogs, onClose } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8; // Número de perros por página

  // Calcular el índice de inicio y fin para la página actual
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = currentPage * perPage;

  // Obtener los perros para la página actual
  const dogsToShow = dogs.slice(startIndex, endIndex);

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // function findDuplicateIds(dogs) {
  //   const duplicateIds = [];
    
  //   for (let i = 0; i < dogs.length; i++) {
  //     const currentId = dogs[i].id;
      
  //     for (let j = i + 1; j < dogs.length; j++) {
  //       if (currentId === dogs[j].id && !duplicateIds.includes(currentId)) {
  //         duplicateIds.push(currentId);
  //       }
  //     }
  //   }
  //   if (duplicateIds.length > 0) {
  //     console.error("IDs duplicados encontrados:", duplicateIds);
  //   }
  //   return duplicateIds;
  // }

  // findDuplicateIds(dogs)
  
  return (
    <>
      <div className={style.container}>
        {dogsToShow.map((dog) => (
          <Card
            key={dog.id + Math.random() * 10}
            id={dog?.id}
            name={dog?.name}
            weight={dog.weight ? dog.weight : dog.peso}
            image={dog?.imagen}
            temperament={dog?.temperament}
            onClose={onClose}
          />
        ))}
      </div>

      {}
      <div className={style.pagination}>
        {/* Botón para la página anterior */}
        <button
          className={style.next}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          PREV
        </button>

        {/* Botones de páginas */}
        {Array.from({ length: Math.ceil(dogs.length / perPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? style.actual : style.other}
          >
            {index + 1}
          </button>
        ))}

        {/* Botón para la página siguiente */}
        <button
        className={style.next}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(dogs.length / perPage)}
        >
          NEXT
        </button>
      </div>
    </>
  );
}
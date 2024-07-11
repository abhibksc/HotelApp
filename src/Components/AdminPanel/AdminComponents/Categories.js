import React from 'react';
import styled from 'styled-components';

const CategoriesContainer = styled.div`
  padding: 20px;
`;

const CategoriesTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const CategoriesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 10px;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 4px;
`;

const Categories = ({ categories }) => {
  return (
    <CategoriesContainer>
      <CategoriesTitle>Categories</CategoriesTitle>
      <CategoriesList>
        {categories.map(category => (
          <CategoryItem key={category.id}>{category.name}</CategoryItem>
        ))}
      </CategoriesList>
    </CategoriesContainer>
  );
};

export default Categories;

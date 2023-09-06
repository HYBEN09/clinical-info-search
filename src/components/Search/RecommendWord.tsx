import React from 'react';

interface RecommendWordProps {
  sickNm: string;
}

const RecommendWord: React.FC<RecommendWordProps> = ({ sickNm }) => {
  return <div>{sickNm}</div>;
};

export default RecommendWord;

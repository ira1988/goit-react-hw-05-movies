import styled from '@emotion/styled';
// const  MovieHeader = styled.div``

const MovieCard = styled.div`
  position: relative;
  display: block;
  width: 800px;
  height: 350px;
  margin: 80px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
    transition: all 0.4s;
  }
`;

const InfoSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
`;

const MovieHeader = styled.div`
  position: relative;
  padding: 25px;
  height: 40%;
  h1 {
    color: black;
    font-weight: 400;
  }
  h4 {
    color: #555;
    font-weight: 400;
  }
  img {
    position: relative;
    float: left;
    margin-right: 20px;
    height: 120px;
    box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
  }
`;
//   .info_section{
//     position: relative;
//     width: 100%;
//     height: 100%;
// 	  background-blend-mode: multiply;
//     z-index: 2;
//     border-radius: 10px;

//     .movie_header{
//   position: relative;
//   padding: 25px;
//   height: 40%;
//   h1{
//     color: black;
//     font-weight: 400;
//   }
//   h4{
//     color: #555;
//     font-weight: 400;
//   }
//       .minutes{
//         display: inline-block;
//         margin-top: 15px;
//         color: #555;
//         padding: 5px;
//         border-radius: 5px;
//         border: 1px solid rgba(0,0,0,0.05);
//       }
//       .type{
//         display: inline-block;
//         color: #959595;
//         margin-left: 10px;
//       }
//
//     }
//     .movie_desc{
//       padding: 25px;
//       height: 50%;
//       .text{
//         color: #545454;
//       }
//     }
//     .movie_social{
//       height: 10%;
//       padding-left: 15px;
//       padding-bottom: 20px;
//       ul{
//         list-style: none;
//         padding: 0;
//         li{
//           display: inline-block;
//           color: rgba(0,0,0,0.3);
//           transition: color 0.3s;
//           transition-delay: 0.15s;
//           margin: 0 10px;
//           &:hover{
//             transition: color 0.3s;
//             color: rgba(0,0,0,0.7);
//           }
//           i{
//             font-size: 19px;
//             cursor: pointer;
//           }
//         }
//       }
//     }
//   }
//   .blur_back{
//     position: absolute;
//     top: 0;
//     z-index: 1;
//     height: 100%; right: 0;
//     background-size: cover;
//     border-radius: 11px;
//   }
// }

// @media screen and (min-width: 768px) {
//   .movie_header{
//     width: 65%;
//   }

//   .movie_desc{
//     width: 50%;
//   }

//   .info_section{
//     background: linear-gradient(to right, #e5e6e6 50%, transparent 100%);
//   }

//   .blur_back{
//     width: 80%;
//     background-position: -100% 10% !important;
//   }
// }

// @media screen and (max-width: 768px) {
//   .movie_card{
//     width: 95%;
//     margin: 70px auto;
//     min-height: 350px;
//     height: auto;
//   }

//   .blur_back{
//     width: 100%;
//     background-position: 50% 50% !important;
//   }

//   .movie_header{
//     width: 100%;
//     margin-top: 85px;
//   }

//   .movie_desc{
//     width: 100%;
//   }

//   .info_section{
//     background: linear-gradient(to top, #e5e6e6 50%, transparent 100%);
//     display: inline-grid;
//   }
// }

// .bright_back{
//   background: url("https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg");
// }

export { MovieCard, InfoSection, MovieHeader };

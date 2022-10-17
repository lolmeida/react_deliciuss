import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrappers = styled.div`
  margin: 4rem 0rem;
`;

export const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: abslute;
    margin-left: 7rem;
    margin-right: 7rem;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
    }

    h4 {
      text-align: center;
      padding: 1rem;
    }
  }
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0, 0.5));
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem, 0rem;
`;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

export const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    h4 {
      color: white;
    }

    svg {
      color: white;
    }
  }
`;
// time in video 1H30
export const FormStyle = styled.form`
  margin: 0rem 0rem;
  position: relative;
  width: 100%;

  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 5rem;
    border: none;
    border-radius: 3rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export const DetailWrappers = styled.div`
  color: brown;
  margin: 10rem 0rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
    color: brown;
  }

  li {
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: brown;
  }

  ul {
    margin-top: 2rem;
    color: brown;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

export const Info = styled.div`
  margin-left: 10rem;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;


export const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-center;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;


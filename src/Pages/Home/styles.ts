import styled from "styled-components";

export const Button = styled.button`
  background: #00856f;
  border-radius: 4rem;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.8rem;
  border: none;
  margin-top: 3.2rem;
  margin-bottom: 6rem;
  width: 26.3rem;
  height: 5.2rem;

  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  margin-left: auto;
  margin-right: auto;
`;

export const Container = styled.div`
  font-family: Dm Sans;
  text-align: center;
`;
export const Stats = styled.div`
  background: var(--white-stats);
  width: 32.7rem;
  padding-block: 4rem;
  border: 1px solid var(--brand-light);
  border-radius: 0.6rem;

  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6rem;
`;

export const Stat = styled.div``;
export const ContainerHeader = styled.header`
  width: 37.5rem;
  margin-left: auto;
  margin-right: auto;
  padding-right: 2rem;
  padding-left: 2rem;
  margin-top: 4.1rem;
  &:before {
    content: "";
    width: 100vw;
    height: 108rem;
    background: var(--brand-light);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const Title = styled.h1`
  font-size: 3.4rem;
  line-height: 130%;
  color: var(--secondary-color);
  margin-top: 1.6rem;
`;
export const Title4 = styled.h4`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 150%;
  color: var(--primary-color);
`;
export const Title3 = styled.h3`
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 130%;
  color: var(--secondary-color);
  margin-bottom: 0.4rem;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 150%;
  color: var(--secondary-color-gray);
  margin-top: 2.4rem;
`;
export const ParagraphStat = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 150%;
  color: var(--primary-color);
`;

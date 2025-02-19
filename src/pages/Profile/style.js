import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;

    padding: 0 12.4rem;

    background: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 2.4rem;
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  div:nth-child(3) {
    margin-bottom: 3rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;
  > img {
    border-radius: 50%;
    justify-content: center;
    width: 18.6rem;
    height: 18.6rem;

    object-fit: cover;
  }
  > label {
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.ROSE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
      width: 2rem;
      width: 2rem;
    }
  }
`

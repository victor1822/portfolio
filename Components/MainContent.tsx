import { ReactNode } from 'react';
import styled, { ThemeDTO } from 'styled-components'

interface MainContentDTO {
  theme?: ThemeDTO;
  children: ReactNode;
}

const MainContentStyledComponent = styled.div<MainContentDTO>`
  background-color: ${props => props.theme.colors.main.darkGray};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex: 1;
`

export const MainContent = (props: MainContentDTO) => {
  const {children, ...rest} = props;
  return (
    <MainContentStyledComponent {...rest}>
      {children}
    </MainContentStyledComponent>
  )
}
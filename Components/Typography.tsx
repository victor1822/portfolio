import { ReactNode } from 'react';
import styled, { ThemeDTO } from 'styled-components'

type TypographyVariant = 'maintitle' | 'title' | 'subtitle' | 'text' | 'span';

type TypographyColor = keyof ThemeDTO['colors']['main'] 
  | keyof ThemeDTO['colors']['secondary'];

interface TypographyProps {
  $variant?: TypographyVariant;
  theme?: ThemeDTO;
  color?: TypographyColor;
  children: ReactNode;
}

function returnTypographyColor(color: TypographyColor, theme: ThemeDTO) {
  switch(color) {
    case 'lightBlue': 
    case 'darkBlue': 
    case 'darkGray': 
    case 'white': 
      return theme.colors.main[color];
    case 'disabled':
    case 'warning':
    case 'success':
    case 'alert':
      return theme.colors.secondary[color];
    default:
      return theme.colors.main.white;
  }
}

function returnVariantFontSize(variant?: TypographyVariant) {
  switch(variant) {
    case 'maintitle': return '32px';
    case 'title': return '20px';
    case 'subtitle': return '16px';
    case 'text': return '14px';
    case 'span': 
    default: return '12px';
  }
}

function returnVariantFontWeight(variant?: TypographyVariant) {
  switch(variant) {
    case 'maintitle':
    case 'title': return '700';
    case 'subtitle': return '500';
    case 'text':
    case 'span': 
    default: return '400';
  }
}

const TypographyStyledComponent = styled.h1<TypographyProps>`
  font-size: ${props => returnVariantFontSize(props.$variant)};
  line-height: ${props => returnVariantFontSize(props.$variant)};
  font-weight: ${props => returnVariantFontWeight(props.$variant)};
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => returnTypographyColor(props.color ?? 'white', props.theme)};
  @media (max-width: 840px) {
    font-size: ${props => props.$variant === 'maintitle' ? "18px" : returnVariantFontSize(props.$variant)};
  }
`
export const Typography = (props: TypographyProps) => {
  const { children,...rest } = props;
  return (
    <TypographyStyledComponent {...rest}>{children}</TypographyStyledComponent>
  )
}

interface TextHighlightProps {
  color: TypographyColor;
  theme?: ThemeDTO;
  children: ReactNode;
}

const TextHighlightStyledComponent = styled.span<TextHighlightProps>`
  color: ${props => returnTypographyColor(props.color ?? 'white', props.theme)};
`
export const TextHighlight = (props: TextHighlightProps) => {
  const { children, ...rest } = props;
  return (
    <TextHighlightStyledComponent {...rest}>{children}</TextHighlightStyledComponent>
  )
}
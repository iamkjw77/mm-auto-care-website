import { Link } from 'react-router-dom';
import { string, number, array, object, bool } from 'prop-types';
import styled, { css } from 'styled-components';
import { fontSizes, calcRem, colors } from 'theme/theme';
import Icon from 'components/Icon/Icon';

const styledHeading = css`
  h${({ headingNum }) => headingNum} {
    font-weight: bold;
    margin-bottom: ${calcRem(10)};
    color: ${({ colors }) => colors.main};
  }
`;

const StyledParagraphContainer = styled.div`
  color: ${({ colors }) => colors.sub};
  line-height: 1.4;
  ${({ headingNum }) => headingNum && styledHeading}

  h1 {
    font-size: ${fontSizes.titleLarge};
  }

  h2 {
    font-size: ${fontSizes.titleBase};
  }

  h3 {
    font-size: ${fontSizes.xl};
  }

  li {
    font-size: ${({ size }) => calcRem(size)};
    margin-bottom: ${({ type }) => type === 'list' && calcRem(7)};
    a {
      user-select: none;
    }
    a:hover {
      text-decoration: ${({ link }) => (link ? 'underline' : '')};
    }
  }

  .list-content {
    display: inline-block;
    margin-left: ${calcRem(10)};
  }
  li > p {
    font-size: ${({ size }) => calcRem(size)};
  }

  li,
  p,
  span {
    font-weight: 500;
  }
`;

const Paragraph = ({
  title,
  type,
  headingNum,
  items,
  icon,
  iconcolor,
  // stroke,
  children,
  colors,
  size,
  link,
  to,
  ...restProps
}) => {
  let Comp = `h${headingNum}`;
  return (
    <StyledParagraphContainer
      headingNum={headingNum}
      colors={colors}
      size={size}
      link={link}
      type={type}
      {...restProps}
    >
      {headingNum && <Comp>{title}</Comp>}

      {type === 'list' && (
        <ul>
          {items.map((item, idx) => {
            if (link)
              return (
                <li key={`${item}-${idx}`}>
                  <Link to={to}>
                    {icon && (
                      <Icon
                        title={item}
                        type={icon}
                        color={iconcolor}
                        // stroke={stroke}
                        width="20"
                        height="20"
                      >
                        <span className="list-content">{item}</span>
                      </Icon>
                    )}{' '}
                    {icon ? null : item}
                  </Link>
                </li>
              );
            return (
              <li key={`${item}-${idx}`}>
                {icon && (
                  <Icon
                    title={item}
                    type={icon}
                    color={iconcolor}
                    // stroke={stroke}
                    width="20"
                    height="20"
                  >
                    <span className="list-content">{item}</span>
                  </Icon>
                )}
                {icon ? null : item}
              </li>
            );
          })}
        </ul>
      )}
      <p>{children}</p>
    </StyledParagraphContainer>
  );
};

Paragraph.propTypes = {
  /** ?????? ?????? */
  // title: oneOfType([string, array]),
  /** ?????? ?????? */
  type: string,
  /** ???????????? ?????? */
  headingNum: number,
  /** ?????? ????????? ?????? */
  items: array,
  /** ????????? ????????? ?????? */
  icon: string,
  /** ????????? ???????????? ??? */
  // stroke: string,
  /** ????????? ??? */
  iconcolor: string,
  /** ?????? ??? */
  colors: object,
  /** ?????? ????????? */
  size: number,
  /** ?????? ?????? */
  link: bool,
  /** ?????? href */
  to: string
};

Paragraph.defaultProps = {
  headingNum: 2,
  title: '',
  type: 'normal',
  items: [],
  colors: { main: colors.black, sub: colors.black },
  size: 16,
  link: false
};

StyledParagraphContainer.displayName = 'StyledParagraphContainer';

export default Paragraph;

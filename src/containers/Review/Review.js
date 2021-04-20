import styled from 'styled-components';
import { colors, calcRem, calcInterval, fontSizes } from 'theme/theme';
import Layout from 'pages/Layout/Layout';
import Paragraph from 'components/Paragraph/Paragraph';
import Carousel from 'components/Carousel/Carousel';

const reviews = [
  {
    id: 1,
    name: 'ADEL GHQYEM',
    model: 'Mercedes Benz GLC300',
    star: 1,
    review:
      'After buying my brand new car I wanted to protect it. I inquired with LVPS about Ceramic Coating. I got offered with a Ceramic Pro Silver package! I am very happy with the end results. My car looks like new after every car wash. Will definitely recommend LVPS services to everyone!'
  },
  {
    id: 2,
    name: 'Andy',
    model: 'Honda',
    star: 2,
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste dicta dolores minima cumque qui vitae totam! Aliquid ut in facere obcaecati incidunt illo eum, laudantium animi corrupti, iste itaque dicta?'
  },
  {
    id: 3,
    name: 'Breanna',
    model: 'Toyota',
    star: 3,
    review:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem tempore vero dolorum, culpa provident exercitationem similique possimus ab ad corrupti!'
  },
  {
    id: 4,
    name: 'Conrad',
    model: 'Ford',
    star: 4,
    review:
      'Aut corrupti quod ipsum exercitationem natus non dolore nam voluptas laborum voluptatem numquam necessitatibus hic commodi pariatur, inventore optio libero delectus! Non, corrupti similique odio expedita saepe dolore! Iusto reprehenderit, ea magnam necessitatibus doloremque provident accusantium enim incidunt ratione rerum repellendus facilis?'
  },
  {
    id: 5,
    name: 'Eavan',
    model: 'Chevrolet',
    star: 5,
    review:
      'Incidunt facilis dolorum commodi consequatur quia iste? Fuga minima consectetur odit doloribus temporibus tempora quidem modi quaerat perferendis praesentium magnam, impedit dolorem velit qui nostrum! Quis asperiores consectetur tempora temporibus, similique assumenda exercitationem architecto quod ipsum!'
  }
];

const StyledReviewContainer = styled.section`
  background: url('assets/dummy_background.png') no-repeat;
  background-size: cover;
  background-position: center;
  padding: ${calcInterval([75, 100])};

  @media only screen and (max-width: 1200px) {
    padding: ${calcInterval([70, 50])};
  }
`;

const FullContainer = styled.div`
  max-width: ${calcRem(1200)};
  margin: 0 auto;
  position: relative;

  @media only screen and (max-width: 768px) {
    .review {
      margin: 0 auto;

      font-size: ${fontSizes.base};
      max-width: ${calcRem(300)};
      padding: ${calcRem(40)};
      box-sizing: border-box;
    }

    h2 {
      font-size: ${fontSizes.xxxl};
      text-align: center;
    }
    .review-title {
      width: 100%;
    }
    .review-title > p {
      display: none;
    }
  }
`;

const StyledReviewTitleContainer = styled(Layout.FlexContainer)`
  margin-bottom: ${calcRem(100)};

  @media only screen and (max-width: 768px) {
    margin-bottom: ${calcRem(0)};
  }

  div + div {
    margin-left: ${calcRem(25)};
  }
`;

const Review = () => {
  return (
    <StyledReviewContainer>
      <FullContainer>
        <Review.Title />
        <Review.Contents />
      </FullContainer>
    </StyledReviewContainer>
  );
};

Review.Title = () => {
  return (
    <StyledReviewTitleContainer justifyContent="flex-start">
      <div>
        {/* <Icon type="star" style={{ display: 'inline' }} />
        <Icon type="star" style={{ display: 'inline' }} />
        <Icon type="star" style={{ display: 'inline' }} />
        <Icon type="star" style={{ display: 'inline' }} /> */}
      </div>
      <Paragraph
        headingNum={2}
        size={24}
        type="title"
        title="Customer Reviews"
        colors={{ main: colors.white, sub: colors.redMain }}
        className="review-title"
      >
        Google Reviews - 5 Stars Link to google page.
      </Paragraph>
    </StyledReviewTitleContainer>
  );
};

Review.Contents = () => {
  return <Carousel type="paragraph" contents={reviews} />;
};

StyledReviewContainer.displayName = 'StyledReviewContainer';
StyledReviewTitleContainer.displayName = 'StyledReviewTitleContainer';
Review.Title.displayName = 'Review-Title';
Review.Contents.displayName = 'Review-Contents';

export default Review;

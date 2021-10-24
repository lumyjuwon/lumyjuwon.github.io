import styled from 'styled-components';
import { Resources } from '../../resources/index';

const Container = styled.div({
  alignItems: 'center'
});

const UniversityName = styled.span({
  fontSize: '16px',
  '@media screen and (max-width: 768px)': {
    display: 'block'
  }
});

const UniversityDate = styled.span({
  fontSize: '14px',
  marginLeft: '8px',
  '@media screen and (max-width: 768px)': {
    marginLeft: '0px'
  }
});

export function Education() {
  return (
    <Container>
      <h3>Education</h3>
      {Resources.resume.educations.map((education) => (
        <div>
          <UniversityName>{education.title}</UniversityName>
          <UniversityDate>{education.period}</UniversityDate>
        </div>
      ))}
    </Container>
  );
}

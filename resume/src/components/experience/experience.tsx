import styled from 'styled-components';
import { CompanyInfo } from './companyInfo';
import { ProjectProps, Project } from '../common/project';

interface CompanyExperience {
  [companyName: string]: {
    startDate: Date;
    projects: ProjectProps[];
    endDate?: Date;
  };
}

const companyExperience: CompanyExperience = {
  PearlAbyss: {
    startDate: new Date('2019-08'),
    projects: [
      {
        name: '사내 Slack Server',
        description: `Slack API 핸들링 서버`,
        whatIdo: [
          'Slack Interaction을 Handle하는 Server 구축',
          '외부망에서 Slack을 통해 Jenkins 빌드와 같은 개발망 내에서만 할 수 있는 특정 작업을 처리할 수 있도록 기능 제공'
        ],
        whatIdoTitle: '담당 업무',
        period: '2021.05 ~ 현재',
        skills: ['Node.js', 'Typescript', 'Mongoose', 'Slack API']
      },
      {
        name: 'Game Automation',
        description: 'Android, iOS, Windows 게임 QA자동화 프레임워크',
        whatIdo: [
          'Jest 기반의 게임 자동화 Framework 설계 및 개발',
          'Appium을 이용해 Android, iOS, Windows 플랫폼 제어 개발',
          '사내 Android, iOS, Windows 플랫폼에서 운영되는 모든 게임을 자동화 가능한 프레임워크 설계',
          '검은사막 모바일 Game Automation 도입 및 프로파일링, 컨텐츠 검증 Jenkins CI 구축'
        ],
        whatIdoTitle: '담당 업무',
        period: '2020.10 ~ 현재',
        skills: ['Node.js', 'Typescript', 'Jest', 'Appium', 'TCP Socket', 'Flatbuffer']
      },
      {
        name: '검은사막 모바일',
        description: '검은사막 모바일 게임',
        whatIdo: [
          'Android, iOS 소셜 로그인 유지보수',
          'Android, iOS SDK 관리 및 업데이트, 마이그레이션 작업',
          'Android, iOS CI/CD 운영 및 개발'
        ],
        whatIdoTitle: '담당 업무',
        skills: ['Android', 'iOS', 'Java', 'Object-c', 'C++', 'Python', 'CI/CD'],
        period: '2020.01 ~ 현재',
        urls: [
          'https://play.google.com/store/apps/details?id=com.pearlabyss.blackdesertm&hl=ko&gl=US',
          'https://apps.apple.com/kr/app/%EA%B2%80%EC%9D%80%EC%82%AC%EB%A7%89-%EB%AA%A8%EB%B0%94%EC%9D%BC/id1323002999'
        ]
      },
      {
        name: '검은사막+',
        description: '검은사막 콘솔 및 온라인 유틸리티 애플리케이션',
        whatIdo: ['검은사막+ 앱 구조 설계', '하이브리드 앱 UI/UX 개발', 'Push Notification 개발', 'Client 로그인 개발'],
        whatIdoTitle: '담당 업무',
        skills: ['React-Native', 'Typescript', 'Android', 'iOS', 'React', 'Firebase', 'Redux', 'Redux-Saga', 'Redux-Persist'],
        period: '2019.08 ~ 현재',
        urls: [
          'https://play.google.com/store/apps/details?id=com.pearlabyss.pearlapp&hl=ko&gl=US',
          'https://apps.apple.com/kr/app/%EA%B2%80%EC%9D%80%EC%82%AC%EB%A7%89/id1460559702'
        ]
      }
    ]
  },
  Cizion: {
    startDate: new Date('2018-07'),
    endDate: new Date('2018-08'),
    projects: [
      {
        name: 'Comment Classifier',
        description: '댓글 데이터 긍정 및 부정 판별 모델',
        whatIdoTitle: '담당 업무',
        whatIdo: [
          '모델 효율 검증을 위한 대용량 학습 데이터 수집',
          'Bi-LSTM 모델을 이용하여 수집한 학습 데이터를 이용해 학습',
          '학습된 모델 정확도 검증'
        ],
        period: '2018.07 ~ 2018.08',
        skills: ['Python', 'Tensorflow', 'Scraping']
      }
    ]
  }
};

const companyExperienceKeys = Object.keys(companyExperience);

const Container = styled.div({});

export function Experience() {
  return (
    <Container>
      <h2>Experience</h2>
      {companyExperienceKeys.map((companyName: string) => {
        return (
          <>
            <CompanyInfo
              key={companyName}
              companyName={companyName}
              startDate={companyExperience[companyName].startDate}
              endDate={companyExperience[companyName].endDate}
            >
              {companyExperience[companyName].projects.map((project: ProjectProps) => {
                return <Project key={project.name} project={project} />;
              })}
            </CompanyInfo>
          </>
        );
      })}
    </Container>
  );
}

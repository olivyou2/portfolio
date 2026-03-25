import Career from "./blocks/Career";
import Contact from "./blocks/Contact";
import Introduce from "./blocks/Introduce";
import Portfolio from "./blocks/Portfolio";
import Reward from "./blocks/Reward";
import TechStacks from "./blocks/TechStacks";
import Values from "./blocks/Values";
import Navigator from "./components/Navigator";
import "./App.css";
import usePopup from "./hooks/usePopup";
import Popup from "./components/Popup";
import PortfolioPopup from "./components/PortfolioPopup";
import { getTechStack } from "./data/techStack";

function App() {
  const popupState = usePopup();

  return (
    <>
      <Introduce />
      <Navigator />
      <Values />
      <TechStacks />
      <Portfolio portfolioPopupState={popupState} />
      <Career />
      <Reward />
      <Contact />

      <Popup popupState={popupState}>
        {
          popupState.payload === "untitle" && <PortfolioPopup
            name="언타이틀"
            imgs={["./portfolio_untitle.png"]}
            description="디자인에 주요하게 사용되는 에셋이나 필요한 링크를 모아놓은 사이트. Svelte, Spring 스택으로 개발하였으며 전체 개발 프로세스를 담당함. 배포의 전 스택은 AWS로 구성되어 있으며, Github Actions를 이용하여 CI/CD를 구축하였음."
            stacks={[
              getTechStack("Svelte")!,
              getTechStack("Spring")!,
              getTechStack("TypeScript")!,
              getTechStack("Docker")!,
              getTechStack("GitHub")!,
              getTechStack("AWS")!,
            ]}
            people={3}
            date="2023.12 - 2024.02"
            links={[
              { name: "GitHub", url: "https://github.com/your-repo" }
            ]}
            details={
              [{
                title: "PM / 디자이너의 문제 제기",
                content: [
                  "당시 같이 작업하던 PM이 디자인 작업을 하면서 디자인에 필요한 에셋이나 링크들을 한 곳에서 관리할 수 있으면 좋겠다고 제안함.",
                  "디자이너가 주로 사용하는 Figma 플러그인으로도 비슷한 기능이 있었지만, 플러그인마다 관리되는 에셋이 다르고, 팀원들과 공유하기 어려운 점이 있어서 웹 서비스로 개발하기로 결정함."
                ]
              }, {
                title: "애자일 개발",
                content: [
                  "피그마를 통해 실시간으로 대화를 나누며 디테일한 기능은 전부 덜어내고 최소한의 spec을 완성하여 빠르게 개발을 진행함.",
                  "AWS Lightsail 과 Nginx 를 사용해 배포환경을 빠르게 구축하고, On-premise Github Actions Runner를 구축하여 CI/CD 환경을 구축함."
                ]
              }, {
                title: "Google OAuth 로그인 구현",
                content: [
                  "바닐라 로그인을 구현하지 않고 Google OAuth 로그인만 구현하기로 결정함.",
                  "Spring Security 를 사용해도 됐지만, Workflow 에 대한 이해를 높이기 위해 API 통신으로 직접 구현함."
                ]
              }, {
                title: "QueryDSL & DB",
                content: [
                  "페이지가 카테고리, 태그로 분류가 되어있었는데 이를 설계하기 위해 카테고리에 1:n, 태그를 m:n 관계로 설정함.",
                  "JPQL 로 카테고리와 태그를 조회하는 쿼리문을 작성했는데, 가독성이 너무 떨어지고 유지보수가 어려워서 QueryDSL로 전환함.",
                  "실제 서비스에서는 데이터가 많지 않았지만, 추후 데이터가 많아질 경우를 대비하여 태그 관계 테이블에 인덱스를 추가함."
                ]
              }]}
          />
        }

        {
          popupState.payload === "magma" && <PortfolioPopup
            name="마그마"
            imgs={["./portfolio_magma.png"]}
            description="마케팅 플랫폼과 마케팅 공급업자 간의 연결을 돕는 서비스. Svelte, Spring 스택으로 개발하였으며 웹사이트 전반을 개발하고, Python-compatiable 한 API 를 제공하여 마케팅 플랫폼 자동화 솔루션과의 연동을 담당함"
            stacks={[
              getTechStack("Svelte")!,
              getTechStack("Spring")!,
              getTechStack("Python")!,
              getTechStack("TypeScript")!,
              getTechStack("Docker")!,
              getTechStack("GitHub")!
            ]}
            people={1}
            date="2025.08 ~"
            links={[
              { name: "GitHub", url: "https://github.com/your-repo" }
            ]}
            details={
              [{
                title: "유저 관리 및 인증",
                content: [
                  "고객사에서 계층형 유저 관리 및 인증 시스템을 요구하여 3단계로 이루어진 권한 체계를 설계함.",
                  "하위 계층의 유저를 효율적으로 일관되게 관리하기 위해 Recursive 쿼리문을 설계함"
                ]
              }, {
                title: "Log 처리",
                content: [
                  "수천개의 마케팅 단위에서 하루에 수십에서 수백건의 로그가 발생하는데, 한달의 Expiration 기간동안 로그를 저장해야 했음.",
                  "이를 처리하는 것은 어려운 일이 아니나, 로그들간의 관계를 연산하는 복잡한 조회가 자주 이루어졌음",
                  "Read Transaction 이 늦어지면서 전체 시스템의 Response Time이 늦어지는 문제가 발생하여 Optimization 을 진행함",
                  "로그 테이블을 조회 빈도가 높은 컬럼들로 분할하여 인덱싱을 진행하고, 자주 조회되는 패턴들을 분석하여 쿼리문을 최적화함"
                ]
              }, {
                title: "Python-compatiable API 설계",
                content: [
                  "마케팅 플랫폼 자동화 솔루션과의 연동을 위해 Python-compatiable 한 API를 제공해야 했음",
                  "해당 솔루션은 Spreadsheet 에서 주기적으로 데이터를 불러와 API Call 을 한 후, 결과를 Spreadsheet 에 업데이트 하는 방식으로 동작했음",
                  "고객사의 요구사항에 맞게 한 번의 API Call 로 여러 정보를 수집할 수 있어야 해서 API Endpoint를 설계할 때, 필요한 데이터를 한 번에 수집할 수 있도록 Endpoint를 설계함"
                ]
              }]}
          />
        }


      </Popup>
    </>
  )
}

export default App;
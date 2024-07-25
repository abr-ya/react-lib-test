import { Page } from "@cars/design-system";

import SearchContainer from "./SearchContainer/SearchContainer";
import ListContainer from "./ListContainer/ListContainer";
import FooterContainer from "./FooterContainer/FooterContainer";

const ActsPage = () => (
  <Page.Container>
    <Page.Header title="Акты на уничтожение" showDivider />
    <Page.Content>
      <SearchContainer />
      <ListContainer />
    </Page.Content>
    <Page.Footer>
      <FooterContainer />
    </Page.Footer>
  </Page.Container>
);

export default ActsPage;

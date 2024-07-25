import { Button, Page } from "@cars/design-system";
import { Caption1, H2Size24Semibold } from "@cars/uikit";

const DesignSystemTest = () => {
  const clickHandler = () => {
    console.log("click!");
  };

  return (
    <Page>
      <Page.Header title="DesignSystemTest">
        <H2Size24Semibold>DesignSystemTest</H2Size24Semibold>
        <Caption1>тест компонентов из DS</Caption1>
      </Page.Header>
      <Page.Content>
        <Button onClick={clickHandler} size="md" variant="primary">
          Button
        </Button>
      </Page.Content>
      <Page.Footer>
        <Caption1>page footer</Caption1>
      </Page.Footer>
    </Page>
  );
};

export default DesignSystemTest;

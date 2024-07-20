import React, { CSSProperties, FC, useState } from "react";
import { Button } from "@cars/design-system";

import { ITagItem } from "components/hookForm/interfaces";

import { TagsCloudWrapper, Tags, Tag } from "./TagsCloud.styled";

interface ITagsCloud {
  tagsData: ITagItem[];
  tagsToShow?: number;
}

const TAGS_COUNT_BTN_STYLE: CSSProperties = {
  flex: "0 0 auto",
  marginLeft: "12px",
};

const TagsCloud: FC<ITagsCloud> = ({ tagsData, tagsToShow = 3 }) => {
  const [showAllTags, setShowAllTags] = useState<boolean>(false);

  // const getDataHelper = (data: Array<string>, labelPrefix: string): Array<ITagItem> =>
  //   data.map(item => ({ condition: !!item, label: `${labelPrefix}: ${item}` }));

  // todo проверить - уточнить!
  // const getCategoryData = (data: Array<string>): Array<ITagItem> => getDataHelper(data, 'Категория');
  // const getStatusData = (data: Array<string>): Array<ITagItem> => getDataHelper(data, 'Статус');

  const renderTags = (): Array<JSX.Element> => {
    const filteredTags = tagsData.filter((tagData) => tagData.condition);
    const tagsToRender = showAllTags ? filteredTags : filteredTags.slice(0, tagsToShow);

    return tagsToRender.map((tagData) => <Tag key={tagData.label}>{tagData.label}</Tag>);
  };

  const handleShowAllTags = (): void => {
    setShowAllTags((prevShowAllTags) => !prevShowAllTags);
  };

  const hiddenTagsCount = tagsData.filter((tagData) => tagData.condition).length - tagsToShow;

  return (
    <TagsCloudWrapper>
      <Tags>{renderTags()}</Tags>
      {hiddenTagsCount > 0 && (
        <Button style={TAGS_COUNT_BTN_STYLE} onClick={handleShowAllTags} size="xs" variant="transparent">
          {showAllTags ? "Свернуть" : `Показать +${hiddenTagsCount}`}
        </Button>
      )}
    </TagsCloudWrapper>
  );
};

export default TagsCloud;

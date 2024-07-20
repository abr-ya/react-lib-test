export interface ICodeName {
  code: string;
  name: string;
}

export type TStatus = "draft" | "for_approval" | "approved" | "in_progress" | "done" | "for_disbandment" | "disbanded";

export interface IActSearchRequestParams {
  number?: string;
  registrationNumber?: string;
  statusCodes?: TStatus[];
  documentCategories?: string[] | undefined;
  createdTimeFrom?: number | string;
  createdTimeTo?: number | string;
  approveTimeFrom?: number | string;
  approveTimeTo?: number | string;
  executionTimeFrom?: number | string;
  executionTimeTo?: number | string;
  size?: number;
  page?: number;
}

// здесь общая часть (с детальной), 23.01.2024 дто-ошки начали расходиться)
export interface IDestructionActListItem {
  guid: string; // Уникальный идентификатор в формате GUID
  approveTime?: number; // Дата согласования акта
  approverName?: string; // ФИО согласовавшего акт на уничтожение (заполняется без справочника)
  createdTime?: number; // Дата создания акта
  digitalDocDestructionTime?: number; // Фактическая дата уничтожения электронных документов
  documentCategory: ICodeName; // Категория документа по справочнику DOCUMENT_CATEGORY
  executionTime?: number; // Дата закрытия акта
  number: string; // Уникальный номер акта на уничтожение
  paperDocDestructionTime?: number; // Фактическая дата уничтожения бумажных документов
  paperEgidDestructionTime?: number; // Фактическая дата уничтожения ЭГО для бумажных документов
  registrationDate?: number; // Регистрационный номер акта на уничтожение из СЭОДО
  registrationNumber?: string; // Дата регистрации акта на уничтожение в СЭОДО
  status?: ICodeName; // Статус акта на уничтожение
  technicalComment?: string; // Служебный комментарий к акту на уничтожение
  title: string; // Заголовок акта на уничтожение
  hasPaperDocs: boolean; // Признак наличия бумажных документов
  hasDonePaperTasks: boolean; // Признак наличия успешно завершенных заданий на уничтожение бумажных документов
  hasActivePaperTasks: boolean; // Признак наличия неотработанных заданий на уничтожение бумажных документов
  isDigital: boolean; // Формат операционного документа
}

// в данный момент (10/02/2023) это одна дто-ошка
// upd: наконец-то детальная стала отличаться от списка
export interface IDestructionAct extends IDestructionActListItem {
  documentCount: number;
  positionCount: number;
}

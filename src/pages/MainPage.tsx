import PageContainer from "@layouts/PageContainer";
import Dnd from "@components/complex/Dnd";
import {MInitialData} from "@utils/mock";

const MainPage = () => {
  return (
    <PageContainer>
      <Dnd initialData={MInitialData}>
        <div id="widget-1">Заявки на утверждение</div>
        <div id="widget-2">Мои заместители</div>
        <div id="widget-3">Занятость сотрудников</div>
        <div id="widget-4">Сотрудники</div>
        <div id="widget-5">TS за отчетную неделю</div>
        <div id="widget-6">Отсутствия</div>
        <div id="widget-7">Индекс счастья</div>
        <div id="widget-8">Мониторинг настроения</div>
        <div id="widget-9">Мои ссылки</div>
        <div id="widget-10">Обучение</div>
        <div id="widget-11">Движение персонала</div>
        <div id="widget-12">Актуальность профилей</div>
      </Dnd>
    </PageContainer>
  );
}

export default MainPage;

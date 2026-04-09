import PageHeader from '../../ui/PageHeader'
export default function AddressPage() {
  return (<><PageHeader kicker="Контакты" title="Адрес университета" desc="Физический адрес главного корпуса Университета Коркыт Ата." /><div className="info-card"><h3>📍 Главный корпус</h3><p>Республика Казахстан, 120008<br/>Кызылординская область, г. Кызылорда<br/>ул. Айтеке би, 29А</p></div><div className="info-card"><h3>Как добраться</h3><p>Аэропорт Кызылорды — 15 минут на такси (~500 тг).<br/>Железнодорожный вокзал — 10 минут.<br/>Автобус №12 от центра города.</p></div></>)
}

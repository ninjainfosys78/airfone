import { useState } from 'react';
import { BarChart3 } from 'lucide-react';

interface WardInfoProps {
  locale?: 'en' | 'ne';
}

interface Ward {
  id: number;
  population: number;
  percent: number;
  male: number;
  female: number;
  nameNe: string;
  nameEn: string;
  featuresNe: string[];
  featuresEn: string[];
  left: number;
  top: number;
}

// Population/percent figures sourced from https://besishaharmun.gov.np/ne/node/3
// Ward names, gender split, feature tags, and pin positions below are
// illustrative placeholders (no official ward-boundary/GIS or per-ward
// gender/feature data is published) to match the requested visual design.
const WARDS: Ward[] = [
  { id: 1, population: 2777, percent: 6.23, male: 1416, female: 1361, nameNe: 'पश्चिम क्षेत्र', nameEn: 'Western Area', featuresNe: ['कृषि क्षेत्र प्रधान', 'सडक सम्पर्क', 'खानेपानी सुविधा'], featuresEn: ['Agriculture-led', 'Road access', 'Water supply'], left: 22, top: 44 },
  { id: 2, population: 4221, percent: 9.46, male: 2153, female: 2068, nameNe: 'केशरकोट क्षेत्र', nameEn: 'Kesharkot Area', featuresNe: ['सामुदायिक विद्यालय', 'सडक सम्पर्क', 'खानेपानी सुविधा'], featuresEn: ['Community school', 'Road access', 'Water supply'], left: 37, top: 22 },
  { id: 3, population: 3411, percent: 7.65, male: 1740, female: 1671, nameNe: 'चितीचोक क्षेत्र', nameEn: 'Chitichok Area', featuresNe: ['स्वास्थ्य चौकी', 'सामुदायिक विद्यालय', 'सडक सम्पर्क'], featuresEn: ['Health post', 'Community school', 'Road access'], left: 50, top: 21 },
  { id: 4, population: 1375, percent: 3.08, male: 701, female: 674, nameNe: 'तम्घास क्षेत्र', nameEn: 'Tamghas Area', featuresNe: ['कृषि क्षेत्र प्रधान', 'पर्यटन सम्भाव्य क्षेत्र', 'सडक सम्पर्क'], featuresEn: ['Agriculture-led', 'Tourism potential', 'Road access'], left: 62, top: 27 },
  { id: 5, population: 1830, percent: 4.10, male: 933, female: 897, nameNe: 'सतीभु क्षेत्र', nameEn: 'Satibhu Area', featuresNe: ['पर्यटन सम्भाव्य क्षेत्र', 'कृषि क्षेत्र प्रधान', 'खानेपानी सुविधा'], featuresEn: ['Tourism potential', 'Agriculture-led', 'Water supply'], left: 74, top: 36 },
  { id: 6, population: 2752, percent: 6.17, male: 1403, female: 1349, nameNe: 'घलेगाउँ क्षेत्र', nameEn: 'Ghalegaun Area', featuresNe: ['पर्यटन सम्भाव्य क्षेत्र', 'सडक सम्पर्क', 'सामुदायिक विद्यालय'], featuresEn: ['Tourism potential', 'Road access', 'Community school'], left: 76, top: 51 },
  { id: 7, population: 8703, percent: 19.51, male: 4438, female: 4265, nameNe: 'स्मार्ट IVR AI बजार क्षेत्र', nameEn: 'Besishahar Bazaar Area', featuresNe: ['बजार केन्द्र', 'पूर्ण विद्युतीकरण', 'सडक सम्पर्क'], featuresEn: ['Market hub', 'Full electrification', 'Road access'], left: 38, top: 45 },
  { id: 8, population: 7872, percent: 17.65, male: 4015, female: 3857, nameNe: 'केन्द्रीय बजार क्षेत्र', nameEn: 'Central Market Area', featuresNe: ['बजार केन्द्र', 'स्वास्थ्य चौकी', 'पूर्ण विद्युतीकरण'], featuresEn: ['Market hub', 'Health post', 'Full electrification'], left: 46, top: 56 },
  { id: 9, population: 2326, percent: 5.22, male: 1186, female: 1140, nameNe: 'बोराटा क्षेत्र', nameEn: 'Borata Area', featuresNe: ['कृषि क्षेत्र प्रधान', 'खानेपानी सुविधा', 'सडक सम्पर्क'], featuresEn: ['Agriculture-led', 'Water supply', 'Road access'], left: 29, top: 57 },
  { id: 10, population: 3347, percent: 7.50, male: 1707, female: 1640, nameNe: 'सिल्खुर्मी क्षेत्र', nameEn: 'Silkhurmi Area', featuresNe: ['कृषि क्षेत्र प्रधान', 'सामुदायिक विद्यालय', 'खानेपानी सुविधा'], featuresEn: ['Agriculture-led', 'Community school', 'Water supply'], left: 40, top: 74 },
  { id: 11, population: 5983, percent: 13.42, male: 3051, female: 2932, nameNe: 'तार्किङ क्षेत्र', nameEn: 'Tarking Area', featuresNe: ['सामुदायिक विद्यालय', 'सडक सम्पर्क', 'खानेपानी सुविधा'], featuresEn: ['Community school', 'Road access', 'Water supply'], left: 55, top: 75 },
];

const MAX_WARD = 7;

export default function WardInfo({ locale = 'ne' }: WardInfoProps) {
  const [selectedId, setSelectedId] = useState(MAX_WARD);
  const ward = WARDS.find((w) => w.id === selectedId)!;
  const isNe = locale === 'ne';

  const toNepaliDigits = (n: number | string) =>
    isNe ? String(n).replace(/[0-9]/g, (d) => '०१२३४५६७८९'[Number(d)]) : String(n);
  const toWardLabel = (id: number) => (isNe ? `वडा नं. ${toNepaliDigits(id)}` : `Ward No. ${id}`);

  return (
    <div className="ward-info">
      <div className="ward-info-left">
        <h2>{isNe ? 'वडा अनुसार जानकारी' : 'Ward-wise Information'}</h2>
        <p className="ward-info-subtitle">
          {isNe
            ? 'नक्सामा क्लिक गरी सम्बन्धित वडाको विस्तृत तथ्याङ्क हेर्नुहोस्।'
            : 'Click on the map to view detailed data for that ward.'}
        </p>

        <div className="ward-map">
          {WARDS.map((w) => (
            <button
              key={w.id}
              type="button"
              className={`ward-pin${w.id === selectedId ? ' active' : ''}`}
              style={{ left: `${w.left}%`, top: `${w.top}%` }}
              onClick={() => setSelectedId(w.id)}
              aria-pressed={w.id === selectedId}
            >
              {toNepaliDigits(w.id)}
            </button>
          ))}
        </div>
      </div>

      <div className="ward-info-card">
        <div className="ward-card-header">
          <div>
            <h3>{toWardLabel(ward.id)}</h3>
            <p className="ward-name">{isNe ? ward.nameNe : ward.nameEn}</p>
          </div>
          {ward.id === MAX_WARD && (
            <span className="ward-badge">{isNe ? 'सर्वाधिक जनसंख्या' : 'Highest Population'}</span>
          )}
        </div>

        <div className="ward-share-row">
          <span>{isNe ? 'जनसंख्या हिस्सा' : 'Population Share'}</span>
          <strong>{toNepaliDigits(ward.percent)}%</strong>
        </div>
        <div className="ward-progress-track">
          <div className="ward-progress-fill" style={{ width: `${ward.percent * 4}%` }} />
        </div>

        <div className="ward-gender-grid">
          <div className="ward-gender-box">
            <span>{isNe ? 'पुरुष' : 'Male'}</span>
            <strong>{toNepaliDigits(ward.male.toLocaleString('en-US'))}</strong>
          </div>
          <div className="ward-gender-box">
            <span>{isNe ? 'महिला' : 'Female'}</span>
            <strong>{toNepaliDigits(ward.female.toLocaleString('en-US'))}</strong>
          </div>
        </div>

        <div className="ward-divider" />

        <p className="ward-features-label">{isNe ? 'प्रमुख विशेषताहरू' : 'Key Features'}</p>
        <div className="ward-features">
          {(isNe ? ward.featuresNe : ward.featuresEn).map((f) => (
            <span key={f} className="ward-feature-tag">{f}</span>
          ))}
        </div>

        <a href="#" className="ward-detail-btn">
          {isNe ? 'पूरा वडा विवरण हेर्नुहोस्' : 'View Full Ward Details'}
          <BarChart3 size={18} />
        </a>
      </div>
    </div>
  );
}

// src/pages/PrinterDetail.jsx
import { useParams, Navigate } from 'react-router-dom'
import PrinterPage from '../components/PrinterPage'
import { printersData } from '../data/printersData'
import '../styles/printers.css'

export default function PrinterDetail() {
  const { slug } = useParams()
  const printer = printersData[slug]

  // Если принтер не найден — редирект на каталог
  if (!printer) {
    return <Navigate to="/products" replace />
  }

  return <PrinterPage printer={printer} />
}
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import ProtectedRoute from './ProtectedRoute'

// Pages
import HomePage from '../components/pages/HomePage'

// About
import KazakhstanPage from '../components/pages/about/KazakhstanPage'
import UniversityPage from '../components/pages/about/UniversityPage'
import AdvantagesPage from '../components/pages/about/AdvantagesPage'
import StatsPage from '../components/pages/about/StatsPage'

// Rules
import RequirementsPage from '../components/pages/rules/RequirementsPage'
import DocumentsPage from '../components/pages/rules/DocumentsPage'
import DeadlinesPage from '../components/pages/rules/DeadlinesPage'
import ReviewPage from '../components/pages/rules/ReviewPage'

// Programs
import BachelorPage from '../components/pages/programs/BachelorPage'
import MasterPage from '../components/pages/programs/MasterPage'
import TuitionPage from '../components/pages/programs/TuitionPage'

// Roadmap
import ChoosePage from '../components/pages/roadmap/ChoosePage'
import SubmitPage from '../components/pages/roadmap/SubmitPage'
import RoadmapReviewPage from '../components/pages/roadmap/ReviewPage'
import InvitePage from '../components/pages/roadmap/InvitePage'
import VisaPage from '../components/pages/roadmap/VisaPage'
import ArrivePage from '../components/pages/roadmap/ArrivePage'

// Migration
import TypesPage from '../components/pages/migration/TypesPage'
import ProcessPage from '../components/pages/migration/ProcessPage'
import MigrationDocsPage from '../components/pages/migration/DocsPage'
import ConsultPage from '../components/pages/migration/ConsultPage'
import RegisterPage from '../components/pages/migration/RegisterPage'
import ExtendPage from '../components/pages/migration/ExtendPage'

// Mobility
import MobilityPage from '../components/pages/MobilityPage'

// Life
import DormsPage from '../components/pages/life/DormsPage'
import HealthPage from '../components/pages/life/HealthPage'
import FoodPage from '../components/pages/life/FoodPage'
import TransportPage from '../components/pages/life/TransportPage'
import CulturePage from '../components/pages/life/CulturePage'
import SocialPage from '../components/pages/life/SocialPage'

// Apply
import LoginPage from '../components/pages/apply/LoginPage'
import CabinetPage from '../components/pages/apply/CabinetPage'
import FormPage from '../components/pages/apply/FormPage'
import ApplyDocumentsPage from '../components/pages/apply/DocumentsPage'
import StatusPage from '../components/pages/apply/StatusPage'

// Support
import FaqPage from '../components/pages/support/FaqPage'
import ChatPage from '../components/pages/support/ChatPage'
import FeedbackPage from '../components/pages/support/FeedbackPage'
import SupportContactsPage from '../components/pages/support/ContactsPage'
import KnowledgePage from '../components/pages/support/KnowledgePage'

// Contacts
import AddressPage from '../components/pages/contacts/AddressPage'
import PhonesPage from '../components/pages/contacts/PhonesPage'
import EmailPage from '../components/pages/contacts/EmailPage'
import SocialMediaPage from '../components/pages/contacts/SocialPage'
import HoursPage from '../components/pages/contacts/HoursPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },

      // ── About ──────────────────────────────────────────────────────────
      { path: 'about/kazakhstan', element: <KazakhstanPage /> },
      { path: 'about/university', element: <UniversityPage /> },
      { path: 'about/advantages', element: <AdvantagesPage /> },
      { path: 'about/stats', element: <StatsPage /> },

      // ── Rules ──────────────────────────────────────────────────────────
      { path: 'rules/requirements', element: <RequirementsPage /> },
      { path: 'rules/documents', element: <DocumentsPage /> },
      { path: 'rules/deadlines', element: <DeadlinesPage /> },
      { path: 'rules/review', element: <ReviewPage /> },

      // ── Programs ───────────────────────────────────────────────────────
      { path: 'programs/bachelor', element: <BachelorPage /> },
      { path: 'programs/master', element: <MasterPage /> },
      { path: 'programs/tuition', element: <TuitionPage /> },

      // ── Roadmap ────────────────────────────────────────────────────────
      { path: 'roadmap/choose', element: <ChoosePage /> },
      { path: 'roadmap/submit', element: <SubmitPage /> },
      { path: 'roadmap/review', element: <RoadmapReviewPage /> },
      { path: 'roadmap/invite', element: <InvitePage /> },
      { path: 'roadmap/visa', element: <VisaPage /> },
      { path: 'roadmap/arrive', element: <ArrivePage /> },

      // ── Migration ──────────────────────────────────────────────────────
      { path: 'migration/types', element: <TypesPage /> },
      { path: 'migration/process', element: <ProcessPage /> },
      { path: 'migration/documents', element: <MigrationDocsPage /> },
      { path: 'migration/consult', element: <ConsultPage /> },
      { path: 'migration/register', element: <RegisterPage /> },
      { path: 'migration/extend', element: <ExtendPage /> },

      // ── Mobility ───────────────────────────────────────────────────────
      { path: 'mobility', element: <MobilityPage /> },

      // ── Life ───────────────────────────────────────────────────────────
      { path: 'life/dorms', element: <DormsPage /> },
      { path: 'life/health', element: <HealthPage /> },
      { path: 'life/food', element: <FoodPage /> },
      { path: 'life/transport', element: <TransportPage /> },
      { path: 'life/culture', element: <CulturePage /> },
      { path: 'life/social', element: <SocialPage /> },

      // ── Apply (login public, rest protected) ──────────────────────────
      { path: 'apply/login', element: <LoginPage /> },
      {
        path: 'apply/cabinet',
        element: <ProtectedRoute><CabinetPage /></ProtectedRoute>,
      },
      {
        path: 'apply/form',
        element: <FormPage />, // form is public — anyone can start
      },
      {
        path: 'apply/documents',
        element: <ProtectedRoute><ApplyDocumentsPage /></ProtectedRoute>,
      },
      {
        path: 'apply/status',
        element: <ProtectedRoute><StatusPage /></ProtectedRoute>,
      },

      // ── Support ────────────────────────────────────────────────────────
      { path: 'support/faq', element: <FaqPage /> },
      { path: 'support/chat', element: <ChatPage /> },
      { path: 'support/feedback', element: <FeedbackPage /> },
      { path: 'support/contacts', element: <SupportContactsPage /> },
      { path: 'support/knowledge', element: <KnowledgePage /> },

      // ── Contacts ───────────────────────────────────────────────────────
      { path: 'contacts/address', element: <AddressPage /> },
      { path: 'contacts/phones', element: <PhonesPage /> },
      { path: 'contacts/email', element: <EmailPage /> },
      { path: 'contacts/social', element: <SocialMediaPage /> },
      { path: 'contacts/hours', element: <HoursPage /> },
    ],
  },
])

export default router

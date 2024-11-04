import {
  HomeIcon,
  UserGroupIcon,
  CalendarIcon,
  NewspaperIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  HandRaisedIcon,
  BellIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  CheckIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  DocumentDuplicateIcon,
  ArrowDownTrayIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowPathIcon,
  UserIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon as InfoSolidIcon,
  ExclamationTriangleIcon as WarningSolidIcon,
} from "@heroicons/react/24/solid";

export const icons = {
  // Navigation
  home: HomeIcon,
  users: UserGroupIcon,
  calendar: CalendarIcon,
  news: NewspaperIcon,
  document: DocumentTextIcon,
  donation: CurrencyDollarIcon,
  volunteer: HandRaisedIcon,
  notification: BellIcon,
  settings: Cog6ToothIcon,

  // Actions
  search: MagnifyingGlassIcon,
  close: XMarkIcon,
  add: PlusIcon,
  edit: PencilIcon,
  delete: TrashIcon,
  view: EyeIcon,
  download: ArrowDownTrayIcon,
  duplicate: DocumentDuplicateIcon,
  refresh: ArrowPathIcon,

  // Arrows
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  chevronUp: ChevronUpIcon,
  chevronDown: ChevronDownIcon,

  // Status/Feedback
  success: CheckCircleIcon,
  error: ExclamationCircleIcon,
  info: InfoSolidIcon,
  warning: WarningSolidIcon,
  check: CheckIcon,
  exclamation: ExclamationTriangleIcon,
  information: InformationCircleIcon,

  // Contact/Location
  email: EnvelopeIcon,
  phone: PhoneIcon,
  location: MapPinIcon,

  // Misc
  user: UserIcon,
  building: BuildingOfficeIcon,
};

// Helper function to render icons with consistent styling
export function Icon({ name, className = "", ...props }) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={`w-6 h-6 ${className}`} {...props} />;
}

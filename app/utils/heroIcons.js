import {
  HomeIcon,
  UserGroupIcon,
  CalendarIcon,
  NewspaperIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  HandRaisedIcon,
  BellIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowPathIcon,
  Bars3Icon,
  CheckIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  DocumentDuplicateIcon,
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
  menu: Bars3Icon,

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
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  chevronUp: ChevronUpIcon,
  chevronDown: ChevronDownIcon,
  arrowUp: ArrowUpIcon,
  arrowDown: ArrowDownIcon,

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
  building: BuildingOfficeIcon,
};

export function Icon({ name, className = "", ...props }) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={`w-6 h-6 ${className}`} {...props} />;
}

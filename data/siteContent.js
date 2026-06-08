export const metrics = [
  { value: "10", label: "trámites académicos centralizados" },
];

export const heroSlides = [
  {
    tag: "Lanzamiento próximo",
    title: "SisacApp+ 1.2 llegará a Play Store y App Store.",
    text: "La nueva aplicación permitirá consultar información académica de pregrado, posgrado y segundas especialidades desde una experiencia más moderna y accesible.",
    ctaLabel: "",
    ctaHref: "",
  },
  {
    tag: "Servicios académicos",
    title: "Una oficina digital pensada para orientar trámites con mayor claridad.",
    text: "El portal reúne certificaciones, guías, requisitos y canales de atención.",
    ctaLabel: "Conocer la oficina",
    ctaHref: "/#oficina",
  },
  {
    tag: "Comunidad UNSA",
    title: "Información institucional con acceso rápido para estudiantes y egresados.",
    text: "Noticias, accesos clave y procesos destacados.",
    ctaLabel: "Ir a guías",
    ctaHref: "/#guias",
  },
];

export const modules = [
  {
    title: "Información institucional",
    description:
      "Presenta misión, alcance, horarios, ubicación, canales de contacto y lineamientos de atención de la oficina.",
  },
  {
    title: "Trámites y certificaciones",
    description:
      "Agrupa solicitudes académicas con acceso directo a requisitos, plazos, costos referenciales y formatos.",
  },
  {
    title: "Orientación al estudiante",
    description:
      "Muestra guías paso a paso, preguntas frecuentes y recomendaciones para evitar observaciones en la solicitud.",
  },
  {
    title: "Sistemas y acceso rápido",
    description:
      "Destaca SisacApp+ 1.2, mesa de partes, seguimiento documentario y accesos institucionales prioritarios.",
  },
];

export const featuredServices = [
  {
    title: "Certificado de estudios",
    summary: "Emisión de récord académico oficial por periodos o consolidado.",
    path: "/tramites/certificaciones",
    badge: "Más solicitado",
  },
  {
    title: "Constancia de egreso",
    summary: "Documento para sustentar culminación del plan de estudios.",
    path: "/tramites/certificaciones",
    badge: "Atención documentaria",
  },
  {
    title: "Sílabos y sumillas",
    summary: "Consulta de respaldo académico para movilidad, convalidación o trámites externos.",
    path: "/tramites/certificaciones",
    badge: "Consulta guiada",
  },
];

export const guides = [
  {
    step: "01",
    title: "Identifica el trámite",
    text: "Identifica el trámite que necesitas y revisa su categoría antes de iniciar la solicitud.",
  },
  {
    step: "02",
    title: "Reúne requisitos",
    text: "Consulta los documentos y condiciones que debes tener listos antes de presentar tu trámite.",
  },
  {
    step: "03",
    title: "Registra y da seguimiento",
    text: "Presenta tu solicitud y realiza seguimiento por los canales de atención correspondientes.",
  },
];

export const announcements = [];

export const rankingCertification = {
  code: "PM01.07.02",
  process: "Emisión de Certificaciones",
  title: "Constancia de Ranking para estudiantes de pregrado",
  objective:
    "Establecer los lineamientos necesarios para las actividades de emisión de constancia de ranking de los estudiantes de pregrado.",
  scope: [
    "Universidad Nacional de San Agustín de Arequipa",
    "Ley N° 30220, Ley Universitaria",
  ],
  legalBasis: [
    "Estatuto de la Universidad Nacional de San Agustín de Arequipa.",
    "RSU N° 0306-2022 que aprueba el ROF 2022.",
    "Reglamento aprobado por Consejo Universitario de fecha 12-04-2018.",
  ],
  definitions: [
    "UNSA: Universidad Nacional de San Agustín de Arequipa.",
    "DSA: Dirección de Servicios Académicos.",
  ],
  requirements: [
    {
      description: "Base de datos académicos.",
      source: "PM01.07.01",
    },
    {
      description: "Recibo de pago de acuerdo al trámite.",
      source: "Estudiantes",
    },
  ],
  summary: [
    {
      label: "Modalidades",
      value: "Presencial y virtual",
    },
    {
      label: "Unidad responsable",
      value: "Dirección de Servicios Académicos",
    },
    {
      label: "Público objetivo",
      value: "Comunidad estudiantil y comunidad de egresados",
    },
  ],
  activities: [
    {
      number: "1",
      title: "Pago del concepto de constancia de ranking",
      description:
        "Realizar el pago por el concepto de constancia de ranking en CAJA UNSA, ya sea en las tres áreas o en caja central.",
      note:
        "Si no es posible realizar el pago en Caja UNSA, este puede efectuarse a través de UNSA PAY o en las cuentas habilitadas de los bancos autorizados. Luego debe canjearse el voucher por la boleta electrónica mediante el correo habilitado por Caja UNSA.",
      unit: "Comunidad de estudiantes / comunidad de egresados",
      responsible: "Estudiante / egresado",
    },
    {
      number: "2",
      title: "Elección de modalidad de atención",
      description:
        "Se define el tipo de atención que realizará el solicitante. Si el trámite es presencial, continúa con la siguiente actividad. Si es virtual, pasa a la actividad 5.",
      unit: "Comunidad estudiantil / comunidad de egresados",
      responsible: "Comunidad estudiantil / comunidad de egresados",
    },
    {
      number: "3",
      title: "Presentación presencial del voucher",
      description:
        "El estudiante o egresado se apersona a la oficina de la DSA con su voucher para continuar con el procedimiento.",
      unit: "Comunidad estudiantil / comunidad de egresados",
      responsible: "Estudiantes / egresados",
    },
    {
      number: "4",
      title: "Emisión presencial de la constancia",
      description:
        "Se recepciona el voucher, se emite la constancia de ranking en formato físico y concluye el procedimiento.",
      unit: "Dirección de Servicios Académicos",
      responsible: "Asistente administrativo",
    },
    {
      number: "5",
      title: "Solicitud virtual por correo",
      description:
        "Enviar una solicitud por correo dirigida a la DSA adjuntando copia de DNI actualizado, boleta electrónica de Caja UNSA y fotografía digital en formato JPG.",
      note:
        "Los estudiantes antiguos que no tengan una cuenta institucional vigente pueden realizar la solicitud desde su correo personal. Si el trámite es presentado por un apoderado, debe adjuntarse carta poder simple y copia del DNI del apoderado y del interesado.",
      unit: "Comunidad de estudiantes / comunidad de egresados",
      responsible: "Estudiante / egresado",
    },
    {
      number: "6",
      title: "Verificación en el sistema académico",
      description:
        "La DSA recepciona la solicitud y verifica la información del solicitante en el sistema académico. Si los datos son correctos, continúa el trámite; si no lo son, se notifican las observaciones y se retorna a la actividad 5.",
      unit: "Dirección de Servicios Académicos",
      responsible: "Asistente administrativo",
    },
    {
      number: "7",
      title: "Emisión virtual de la constancia",
      description:
        "Emitir la constancia de ranking de forma virtual al correo personal y/o institucional del solicitante.",
      unit: "Dirección de Servicios Académicos",
      responsible: "Asistente administrativo",
    },
    {
      number: "8",
      title: "Recepción y conformidad",
      description:
        "El solicitante recepciona la constancia de ranking en su correo personal y/o institucional vigente, da conformidad y termina el procedimiento.",
      unit: "Comunidad de estudiantes / comunidad de egresados",
      responsible: "Estudiante / egresado",
    },
  ],
};

export const certificationGuide = {
  helperSteps: [
    {
      title: "Elige tu certificación",
      text: "Ubica si tu trámite corresponde a pregrado, posgrado, constancias, libretas o regularizaciones.",
    },
    {
      title: "Revisa el pago y los requisitos",
      text: "Cada tarjeta resume el monto, público al que aplica y los documentos que debes adjuntar.",
    },
    {
      title: "Define la modalidad",
      text: "Puedes iniciar varios trámites de forma presencial o virtual según la información de cada servicio.",
    },
  ],
  commonInPerson: "Realizar el pago en las cajas de la UNSA (Tres áreas y en Moral 316).",
  commonVirtual: "Pago y atención virtual disponibles por canales institucionales.",
  commonDelivery:
    "El documento será enviado a su correo vigente. Si requiere el documento en físico, debe apersonarse a la Oficina de Certificaciones con la boleta electrónica y DNI.",
  thirdPartyDelivery: [
    "Carta poder simple.",
    "DNI del interesado y de la persona que realiza el trámite.",
    "Boleta electrónica de Caja UNSA.",
  ],
};

export const certificationCatalog = [
  {
    name: "Libreta de notas",
    category: "Certificaciones generales",
    price: "S/ 2.00",
    audience: [
      "Pregrado",
      "Posgrado",
      "Complementación Académica",
      "Complementación Universitaria",
      "Profesionalización Docente",
      "Programas Especiales",
    ],
    email: "dsa@unsa.edu.pe",
    requirements: ["Solicitud en PDF.", "Boleta electrónica en PDF.", "DNI."],
    notes: [],
    procedure: {
      presencial: "Realizar el pago en las cajas de la UNSA (Tres áreas y en Moral 316).",
      virtual: "UNSAPAY: unsapay@unsa.edu.pe",
      sendTo:
        "Luego enviar al correo de la Dirección de Servicios Académicos dsa@unsa.edu.pe adjuntando la documentación requerida.",
      delivery:
        "El documento será enviado a su correo vigente. Si requiere el documento en físico, debe apersonarse a la Oficina de Certificaciones con la boleta electrónica y DNI (trámite personal).",
      thirdParty: [
        "Carta poder simple.",
        "DNI del interesado y del tercero que realiza el trámite.",
        "Boleta electrónica de Caja UNSA.",
      ],
    },
  },
  {
    name: "Constancia de no adeudar material bibliográfico",
    category: "Constancias",
    price: "S/ 10.00",
    validity: "3 días hábiles una vez emitida.",
    audience: [
      "Pregrado",
      "Posgrado",
      "Complementación Académica",
      "Complementación Universitaria",
      "Profesionalización Docente",
      "Programas Especiales",
    ],
    email: "dsa@unsa.edu.pe",
    requirements: ["Solicitud en PDF.", "Boleta electrónica en PDF.", "DNI."],
    notes: [],
    procedure: {
      presencial: "Realizar el pago en las cajas de la UNSA (Tres áreas y en Moral 316).",
      virtual: "UNSAPAY: unsapay@unsa.edu.pe",
      sendTo:
        "Luego enviar al correo de la Dirección de Servicios Académicos dsa@unsa.edu.pe adjuntando la documentación requerida.",
      delivery:
        "El documento será enviado a su correo vigente. Si requiere el documento en físico, debe apersonarse a la Oficina de Certificaciones con la boleta electrónica y DNI (trámite personal).",
      thirdParty: [
        "Carta poder simple.",
        "DNI del interesado y del tercero que realiza el trámite.",
        "Boleta electrónica de Caja UNSA.",
      ],
    },
  },
  {
    name: "Certificado de estudios - Pregrado",
    category: "Certificados de estudios",
    price: "S/ 50.00",
    audience: ["Pregrado"],
    email: "dsa@unsa.edu.pe",
    requirements: ["Solicitud en PDF.", "Boleta electrónica en PDF.", "DNI."],
    notes: [
      "Costo referencial de S/ 10.00 por año desde 2016 a la actualidad.",
      "Para periodos 2015 hacia atrás, considerar S/ 22.00 por año y consultar monto exacto al correo institucional.",
    ],
    procedure: {
      presencial: "Realizar el pago en las cajas de la UNSA (Tres áreas y en Moral 316).",
      virtual: "UNSAPAY: unsapay@unsa.edu.pe",
      sendTo:
        "Luego enviar al correo de la Dirección de Servicios Académicos dsa@unsa.edu.pe adjuntando la documentación requerida.",
      delivery:
        "El documento será enviado a su correo vigente. Si requiere el documento en físico, debe apersonarse a la Oficina de Certificaciones con la boleta electrónica y DNI (trámite personal).",
      thirdParty: [
        "Carta poder simple.",
        "DNI del interesado y del tercero que realiza el trámite.",
        "Boleta electrónica de Caja UNSA.",
      ],
    },
  },
  {
    name: "Certificado de estudios - Posgrado",
    category: "Certificados de estudios",
    price: "S/ 62.00 por año",
    audience: ["Posgrado", "Maestría", "Doctorado"],
    email: "dsa@unsa.edu.pe",
    requirements: [
      "Solicitud en PDF.",
      "Boleta electrónica en PDF habilitada por la Unidad de Posgrado.",
    ],
    notes: [],
    procedure: {
      presencial: "Realizar el pago en las cajas de la UNSA (Tres áreas y en Moral 316).",
      virtual: "UNSAPAY: unsapay@unsa.edu.pe",
      sendTo:
        "Luego enviar al correo de la Dirección de Servicios Académicos dsa@unsa.edu.pe adjuntando la documentación requerida.",
      delivery:
        "El documento será enviado a su correo vigente. Si requiere el documento en físico, debe apersonarse a la Oficina de Certificaciones con la boleta electrónica y DNI (trámite personal).",
      thirdParty: [
        "Carta poder simple.",
        "DNI del interesado y del tercero que realiza el trámite.",
        "Boleta electrónica de Caja UNSA.",
      ],
    },
  },
  {
    name: "Actualización de foto en el sistema",
    category: "Actualizaciones",
    price: "S/ 5.00",
    audience: ["Estudiantes con actualización de registro fotográfico"],
    email: "oti@unsa.edu.pe",
    requirements: [
      "Solicitud en PDF.",
      "Boleta electrónica en PDF.",
      "Fotografía digital según las características establecidas.",
    ],
    notes: [
      "OTI confirmará la actualización al correo vigente del solicitante.",
      "La imagen debe ser a color, con fondo blanco, traje formal y sin lentes.",
      "Resolución mínima de 300 dpi, formato JPG, tamaño 240x288 px y peso menor a 50 KB.",
      "La fotografía no debe ser escaneada ni retocada.",
    ],
    procedure: {
      presencial: "Realizar el pago en las cajas de la UNSA (Tres áreas y en Moral 316).",
      virtual: "UNSAPAY: unsapay@unsa.edu.pe",
      sendTo:
        "Luego enviar al correo de la Oficina de Tecnologías de la Información, oti@unsa.edu.pe, adjuntando la documentación requerida.",
      delivery: "OTI confirmará la actualización de foto en el sistema al correo vigente del solicitante.",
      thirdParty: [],
    },
  },
  {
    name: "Constancia de egresado - Posgrado",
    category: "Constancias",
    price: "S/ 25.00",
    audience: ["Posgrado", "Maestría", "Doctorado"],
    email: "dsa@unsa.edu.pe",
    requirements: [
      "Solicitud en PDF.",
      "Boleta electrónica en PDF habilitada por la Unidad de Posgrado.",
      "DNI.",
    ],
    notes: [],
    procedure: {
      presencial: "Realizar el pago en las cajas de la UNSA (Tres áreas y en Moral 316).",
      virtual: "UNSAPAY: unsapay@unsa.edu.pe",
      sendTo:
        "Luego enviar al correo de la Dirección de Servicios Académicos dsa@unsa.edu.pe adjuntando la documentación requerida.",
      delivery:
        "El documento será enviado a su correo vigente. Si requiere el documento en físico, debe apersonarse a la Oficina de Certificaciones con la boleta electrónica y DNI (trámite personal).",
      thirdParty: [
        "Carta poder simple.",
        "DNI del interesado y del tercero que realiza el trámite.",
        "Boleta electrónica de Caja UNSA.",
        "DNI.",
      ],
    },
  },
  {
    name: "Constancia de primera matrícula - Posgrado",
    category: "Constancias",
    price: "S/ 6.00",
    audience: ["Posgrado", "Maestría", "Doctorado"],
    email: "dsa@unsa.edu.pe",
    requirements: [
      "Solicitud en PDF.",
      "Boleta electrónica en PDF habilitada por la Unidad de Posgrado.",
      "DNI.",
    ],
    notes: [],
    procedure: {
      presencial: "Realizar el pago en las cajas de la UNSA (Tres áreas y en Moral 316).",
      virtual: "UNSAPAY: unsapay@unsa.edu.pe",
      sendTo:
        "Luego enviar al correo de la Dirección de Servicios Académicos dsa@unsa.edu.pe adjuntando la documentación requerida.",
      delivery:
        "El documento será enviado a su correo vigente. Si requiere el documento en físico, debe apersonarse a la Oficina de Certificaciones con la boleta electrónica y DNI (trámite personal).",
      thirdParty: [
        "Carta poder simple.",
        "DNI del interesado y del tercero que realiza el trámite.",
        "Boleta electrónica de Caja UNSA.",
      ],
    },
  },
  {
    name: "Constancia de primera matrícula - Pregrado",
    category: "Constancias",
    price: "S/ 2.00",
    audience: ["Pregrado"],
    email: "dsa@unsa.edu.pe",
    requirements: ["Solicitud en PDF.", "Boleta electrónica en PDF.", "DNI."],
    notes: [],
    procedure: {
      presencial: "Realizar el pago en las cajas de la UNSA (Tres áreas y en Moral 316).",
      virtual: "UNSAPAY: unsapay@unsa.edu.pe",
      sendTo:
        "Luego enviar al correo de la Dirección de Servicios Académicos dsa@unsa.edu.pe adjuntando la documentación requerida.",
      delivery:
        "El documento será enviado a su correo vigente. Si requiere el documento en físico, debe apersonarse a la Oficina de Certificaciones con la boleta electrónica y DNI (trámite personal).",
      thirdParty: [
        "Carta poder simple.",
        "DNI del interesado y del tercero que realiza el trámite.",
        "Boleta electrónica de Caja UNSA.",
      ],
    },
  },
  {
    name: "Deuda por elecciones",
    category: "Regularizaciones",
    price: "Según concepto de pago aplicable",
    audience: ["Comunidad universitaria"],
    email: "dsa@unsa.edu.pe",
    requirements: ["Solicitud en PDF.", "Boleta electrónica en PDF."],
    notes: [],
    procedure: {
      presencial: "Realizar el pago en las cajas de la UNSA (Tres áreas y en Moral 316).",
      virtual: "UNSAPAY: unsapay@unsa.edu.pe",
      sendTo:
        "Luego enviar al correo de la Dirección de Servicios Académicos dsa@unsa.edu.pe adjuntando la documentación requerida.",
      delivery: "",
      thirdParty: [],
    },
  },
  {
    name: "Reactualización de deuda de matrícula 2020 - 2021",
    category: "Regularizaciones",
    price: "Según concepto de matrícula normal",
    audience: ["Estudiantes con deuda de matrícula 2020 - 2021"],
    email: "dsa@unsa.edu.pe",
    requirements: ["Solicitud en PDF.", "Boleta electrónica en PDF."],
    notes: ["El pago debe realizarse bajo el concepto de Matrícula Normal."],
    procedure: {
      presencial: "Realizar el pago en las cajas de la UNSA (Tres áreas y en Moral 316).",
      virtual: "UNSAPAY: unsapay@unsa.edu.pe",
      sendTo:
        "Luego enviar al correo de la Dirección de Servicios Académicos dsa@unsa.edu.pe adjuntando la documentación requerida.",
      delivery: "",
      thirdParty: [],
    },
  },
];

export const quickLinks = [
  {
    title: "Mesa de partes",
    description: "Recepción documentaria y derivación de solicitudes académicas.",
  },
  {
    title: "SisacApp+",
    description: "Canal visible para seguimiento, consulta y digitalización del servicio.",
  },
  {
    title: "Preguntas frecuentes",
    description: "Dudas comunes sobre plazos, pagos, requisitos y subsanación.",
  },
];

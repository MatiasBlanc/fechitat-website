export interface FormacionSeccion {
  id: string;
  titulo: string;
  contenido: string;
  hangul?: string;
  items?: { termino: string; hangul: string; significado: string; detalle: string }[];
  diagrama?: { titulo: string; descripcion: string; pasos: string[] };
}

export interface FormacionPilar {
  slug: string;
  titulo: string;
  subtitulo: string;
  icono: string;
  badge: "formacion" | "oficial" | "campeonato" | "noticia";
  extracto: string;
  tiempoLectura: string;
  pdfNombre?: string;
  pdfUrl?: string;
  secciones: FormacionSeccion[];
}

export const pilaresFormacion: FormacionPilar[] = [
  {
    slug: "tecnica",
    titulo: "Técnica Fundamental: Tul, Matsogi, Sogi y Chagi",
    subtitulo: "Fundamentos biomecánicos, teoría del poder y enciclopedia técnica del Taekwon-Do ITF.",
    icono: "🥋",
    badge: "formacion",
    extracto: "Estudio exhaustivo de las posiciones fundamentales (Sogi), técnicas de patada (Chagi), formas (Tul) y combate tradicional (Matsogi) según la enseñanza del Gral. Choi Hong Hi.",
    tiempoLectura: "12 min de lectura",
    pdfNombre: "Manual-Tecnico-Fundamental-ITF.pdf",
    pdfUrl: "/documentos",
    secciones: [
      {
        id: "teoria-del-poder",
        titulo: "1. La Teoría del Poder (Him ui Wolli)",
        hangul: "힘의 원리",
        contenido: `La Teoría del Poder en el Taekwon-Do ITF se fundamenta en leyes científicas de la física mecánica (fuerza, aceleración, masa y energía cinética). El General Choi Hong Hi estructuró seis componentes indispensables que deben coordinarse al ejecutar cualquier técnica para generar el máximo poder de impacto:

1. **Fuerza de Reacción (Bandong Ryok):** Según la tercera ley de Newton, a toda acción corresponde una reacción de igual magnitud en sentido opuesto. Tirar hacia atrás el puño que no golpea hacia la cadera duplica la fuerza del puño que impacta.
2. **Concentración (Jip Joong):** Enfocar la masa corporal y la energía muscular en el punto de contacto más reducido posible (ej. los dos nudillos principales o el canto del pie) y en el instante más breve.
3. **Equilibrio (Kyun Hyung):** Mantener la estabilidad del centro de gravedad tanto estática como dinámicamente. La postura debe ser firme pero elástica.
4. **Control de la Respiración (Hohup Jojul):** Exhalación breve y explosiva en el instante del impacto, tensando el abdomen para prevenir lesiones y maximizar la descarga energética.
5. **Masa Corporal (Zillang):** Utilizar la totalidad del peso corporal aprovechando la rotación de caderas y el principio de la onda (Sine Wave).
6. **Velocidad (Sokdo):** El factor más determinante en la energía cinética (E = 1/2 m·v²). La aceleración continua antes del contacto multiplica exponencialmente el poder destructivo.`,
        diagrama: {
          titulo: "El Movimiento Ondulatorio (Sine Wave - Sinusoidal)",
          descripcion: "Patrón de movimiento característico del Taekwon-Do ITF: Abajo - Arriba - Abajo.",
          pasos: [
            "Fase 1 (Relajación y descenso): Las rodillas se flexionan ligeramente al iniciar el desplazamiento.",
            "Fase 2 (Elevación y aceleración): El cuerpo se eleva alcanzando el punto máximo de la trayectoria mientras se carga la técnica.",
            "Fase 3 (Caída y penetración explosiva): El peso corporal desciende violentamente al momento de fijar la posición y conectar el golpe.",
          ],
        },
      },
      {
        id: "posiciones-sogi",
        titulo: "2. Posiciones Fundamentales (Sogi 서기)",
        hangul: "서기",
        contenido: `Las posiciones son la base biomecánica del Taekwon-Do. Una postura incorrecta compromete el equilibrio, la absorción de impactos y la movilidad táctica.`,
        items: [
          {
            termino: "Gunnun Sogi",
            hangul: "건눈 서기",
            significado: "Posición para caminar (Walking Stance)",
            detalle: "Ancho de un hombro y medio de separación frontal, un hombro de ancho lateral. Peso repartido 50% y 50%. Rodilla delantera flexionada alineada con el talón; pierna trasera extendida con el pie rotado 25° hacia afuera.",
          },
          {
            termino: "Niunja Sogi",
            hangul: "니은자 서기",
            significado: "Posición en L (L-Stance)",
            detalle: "Distribución del peso: 70% en la pierna trasera y 30% en la delantera. Separación frontal de un hombro y medio. El pie trasero apunta 15° hacia adentro y el delantero hacia el frente, formando una letra L.",
          },
          {
            termino: "Annun Sogi",
            hangul: "앉은 서기",
            significado: "Posición de jinete (Sitting Stance)",
            detalle: "Pies separados a un ancho de hombro y medio, paralelos. Peso distribuido equitativamente (50/50). Rodillas empujadas hacia afuera sobre los pulgares para generar máxima estabilidad lateral.",
          },
          {
            termino: "Gojung Sogi",
            hangul: "고정 서기",
            significado: "Posición en L fija (Fixed Stance)",
            detalle: "Similar a Niunja Sogi pero con mayor separación frontal (un hombro y medio más un pie). Distribución de peso equitativa 50% en ambas piernas. Muy utilizada para ataques de puño potentes.",
          },
        ],
      },
      {
        id: "patadas-chagi",
        titulo: "3. Técnicas de Patada (Chagi 차기)",
        hangul: "차기",
        contenido: `El Taekwon-Do es mundialmente reconocido por la precisión y variedad de sus técnicas de pierna. Cada patada involucra cuatro etapas biomecánicas: elevación de rodilla (cámara), extensión explosiva con rotación del pie de apoyo, retracción inmediata y descenso controlado.`,
        items: [
          {
            termino: "Ap Chagi",
            hangul: "앞 차기",
            significado: "Patada frontal directa",
            detalle: "Impacto con Ap Kumchi (metatarso). Elevación vertical de rodilla, empuje pélvico al frente y flexión de los dedos hacia atrás para evitar fracturas.",
          },
          {
            termino: "Yop Chagi",
            hangul: "옆 차기",
            significado: "Patada lateral penetrante",
            detalle: "Impacto con Balkal (canto externo del pie). Rotación total del pie de apoyo a 180°, alineación de talón, cadera y hombro en un mismo plano biomecánico.",
          },
          {
            termino: "Dollyo Chagi",
            hangul: "돌려 차기",
            significado: "Patada circular",
            detalle: "Impacto con Ap Kumchi o empeine según el objetivo. Trayectoria semicircular con rotación de cadera para golpear las costillas o la sien del oponente.",
          },
          {
            termino: "Bandae Dollyo Chagi",
            hangul: "반대 돌려 차기",
            significado: "Patada de talón con giro (Spinning Hook Kick)",
            detalle: "Giro de 360° sobre el pie pivote, extensión del talón en trayectoria circular de enganche. Altísima potencia destructiva generada por el torque del torso.",
          },
        ],
      },
      {
        id: "formas-tul",
        titulo: "4. Formas Tradicionales (Tul 틀)",
        hangul: "틀",
        contenido: `Los 24 Tuls representan las 24 horas de un día o la vida entera de una persona en relación con la eternidad. Cada forma es una batalla imaginaria contra múltiples adversarios, estructurada con un número específico de movimientos, diagramas filosóficos y una profunda raíz histórica coreana.

**Puntos clave de evaluación técnica en un Tul:**
- Cada Tul debe comenzar y terminar exactamente en el mismo punto de partida.
- Mantener la postura correcta y la dirección visual hacia el blanco imaginario en todo momento.
- Los músculos deben tensarse y relajarse en los momentos adecuados (no permanecer rígido).
- El movimiento debe ejecutarse con ritmo fluido, sin rigidez entre las transiciones pero con un instante nítido de congelamiento al culminar cada técnica.
- Inhalación suave durante la preparación y exhalación cortante al finalizar el impacto.`,
      },
      {
        id: "combate-matsogi",
        titulo: "5. Combate Tradicional (Matsogi 맞서기)",
        hangul: "맞서기",
        contenido: `El combate en el Taekwon-Do ITF se clasifica en etapas pedagógicas progresivas para asegurar la seguridad física y el desarrollo táctico del practicante:

1. **Sambo Matsogi (Combate a 3 pasos):** Enfocado en el aprendizaje de la distancia básica y la coordinación de defensas y contragolpes elementales.
2. **Ibo Matsogi (Combate a 2 pasos):** Combina ataques simultáneos de mano y pie para entrenar cambios de altura y velocidad de reacción.
3. **Ilbo Matsogi (Combate a 1 paso):** Aplicación práctica a corta distancia simulando defensa personal con respuesta inmediata y decisiva.
4. **Jayu Matsogi (Combate libre):** Práctica deportiva y marcial con protecciones reglamentarias, control de potencia, velocidad táctica y respeto irrestricto al compañero.`,
      },
    ],
  },
  {
    slug: "filosofia",
    titulo: "Filosofía, Doctrina y Principios del Taekwon-Do ITF",
    subtitulo: "El camino moral, el juramento y los valores que forjan el carácter del practicante.",
    icono: "☯️",
    badge: "oficial",
    extracto: "El Taekwon-Do es mucho más que un sistema de combate; es una doctrina para la construcción de una sociedad más pacífica mediante el perfeccionamiento del carácter individual.",
    tiempoLectura: "10 min de lectura",
    pdfNombre: "Doctrina-y-Filosofia-ITF.pdf",
    pdfUrl: "/documentos",
    secciones: [
      {
        id: "los-cinco-principios",
        titulo: "1. Los Cinco Principios del Taekwon-Do (Taekwon-Do Jungshin)",
        hangul: "태권도 정신",
        contenido: `El éxito o el fracaso en el entrenamiento del Taekwon-Do depende en gran medida de cómo se observen y practiquen estos principios, tanto dentro del doyang como en la vida cotidiana:`,
        items: [
          {
            termino: "Cortesía",
            hangul: "예의 (Ye Ui)",
            significado: "Respeto, modestia y buenos modales",
            detalle: "Tratar a los demás con amabilidad, inclinarse formalmente al ingresar al doyang, saludar a instructores y compañeros, y evitar demostraciones de arrogancia o vanidad.",
          },
          {
            termino: "Integridad",
            hangul: "염치 (Yom Chi)",
            significado: "Distinguir lo correcto de lo incorrecto y actuar con honestidad",
            detalle: "Poseer la rectitud moral para reconocer los propios errores y no fingir conocimiento ni atribuirse logros ajenos.",
          },
          {
            termino: "Perseverancia",
            hangul: "인내 (In Nae)",
            significado: "Paciencia y tenacidad inquebrantable",
            detalle: "Superar el cansancio físico, las dificultades técnicas y los obstáculos personales. Como dice el antiguo proverbio: 'La paciencia conduce a la virtud'.",
          },
          {
            termino: "Autocontrol",
            hangul: "극기 (Guk Gi)",
            significado: "Dominio de las propias emociones, impulsos y fuerza física",
            detalle: "Un practicante que pierde el control dentro o fuera del tatami pone en riesgo su seguridad y la de sus compañeros. El autocontrol es la máxima expresión de madurez marcial.",
          },
          {
            termino: "Espíritu Indomable",
            hangul: "백절불굴 (Baekjulboolgool)",
            significado: "Valentía inalterable frente a la injusticia y la adversidad",
            detalle: "Mantenerse firme en los principios éticos sin importar las consecuencias. Nunca ceder ante el miedo cuando se defiende lo justo y noble.",
          },
        ],
      },
      {
        id: "el-juramento",
        titulo: "2. El Juramento del Practicante (Taekwon-Do Sonso)",
        hangul: "태권도 선서",
        contenido: `En cada sesión de práctica, los alumnos recitan solemnemente el juramento oficial:

1. **Observaré los principios del Taekwon-Do.**
2. **Respetaré al instructor y a los graduados.**
3. **Nunca haré mal uso del Taekwon-Do.**
4. **Seré un campeón de la justicia y de la libertad.**
5. **Construiré un mundo más pacífico.**`,
      },
      {
        id: "historia-origen",
        titulo: "3. Historia y Fundación de la ITF",
        hangul: "역사",
        contenido: `El Taekwon-Do fue fundado oficialmente el **11 de abril de 1955** por el General Choi Hong Hi (1918–2002) en Corea del Sur, fusionando principios biomecánicos modernos con elementos del Taekkyeon coreano y el Karate-Do tradicional.

El **22 de marzo de 1966**, se creó en Seúl la **International Taekwon-Do Federation (ITF)** con asociaciones nacionales de Vietnam, Malasia, Singapur, Alemania Federal, Estados Unidos, Turquía, Italia, Egipto y Corea, extendiendo el arte marcial con un programa técnico unificado a nivel planetario.`,
      },
    ],
  },
  {
    slug: "grados",
    titulo: "Guía Oficial de Grados Gup y Dan en Taekwon-Do ITF",
    subtitulo: "Significado de los cinturones, tiempos mínimos y requisitos federativos de evaluación.",
    icono: "🥋",
    badge: "formacion",
    extracto: "Conoce el camino desde el 10º Gup (Cinturón Blanco) hasta las jerarquías de Cinturón Negro (Dan), con el significado simbólico de cada color y los requisitos de examen.",
    tiempoLectura: "15 min de lectura",
    pdfNombre: "Reglamento-Examenes-Grados-ITF.pdf",
    pdfUrl: "/documentos",
    secciones: [
      {
        id: "significado-colores",
        titulo: "1. Significado Simbólico de los Cinturones",
        hangul: "띠의 의미",
        contenido: `La escala de colores no fue elegida al azar; representa el ciclo de la vida, el florecimiento de un árbol y la maduración mental del practicante:`,
        items: [
          {
            termino: "Cinturón Blanco (10º - 9º Gup)",
            hangul: "백띠",
            significado: "Inocencia y pureza",
            detalle: "Representa al principiante que no posee conocimiento previo de Taekwon-Do. La mente está en blanco, lista para recibir la semilla de la enseñanza.",
          },
          {
            termino: "Cinturón Amarillo (8º - 7º Gup)",
            hangul: "노란띠",
            significado: "La Tierra",
            detalle: "Representa la tierra fértil de donde brota la planta y echa sus primeras raíces mientras los cimientos del Taekwon-Do se establecen.",
          },
          {
            termino: "Cinturón Verde (6º - 5º Gup)",
            hangul: "초록띠",
            significado: "El Crecimiento de la Planta",
            detalle: "Simboliza el crecimiento del tallo y las hojas. La destreza técnica del alumno comienza a desarrollarse y afianzarse.",
          },
          {
            termino: "Cinturón Azul (4º - 3º Gup)",
            hangul: "파란띠",
            significado: "El Cielo",
            detalle: "Representa el cielo hacia el cual la planta madura se extiende, convirtiéndose en un árbol fuerte a medida que el entrenamiento progresa.",
          },
          {
            termino: "Cinturón Rojo (2º - 1º Gup)",
            hangul: "빨간띠",
            significado: "El Peligro",
            detalle: "Alerta al estudiante para que ejerza control absoluto sobre su técnica y advierte a los posibles adversarios que se mantengan alejados.",
          },
          {
            termino: "Cinturón Negro (1º a 9º Dan)",
            hangul: "검은띠",
            significado: "Madurez e Inmunidad a la Oscuridad",
            detalle: "Lo opuesto al blanco. Representa la culminación de la etapa básica y el verdadero comienzo del camino marcial como instructor y maestro.",
          },
        ],
      },
      {
        id: "estructura-gup",
        titulo: "2. Programa de Grados Gup y Formas Requeridas",
        hangul: "급 체계",
        contenido: `Para avanzar de un grado a otro, el alumno debe cumplir con el tiempo mínimo de asistencia regular (mínimo 3 meses entre grados Gup) y rendir un examen formal ante una mesa examinadora autorizada por FECHITAT:

- **10º Gup (Blanco):** Sagi-Makki y Sagi-Jirugi (movimientos fundamentales de 4 direcciones).
- **9º Gup (Blanco punta Amarilla):** Chon-Ji Tul (19 movimientos) + Técnicas fundamentales.
- **8º Gup (Amarillo):** Dan-Gun Tul (21 movimientos) + Sambo Matsogi (combate a 3 pasos).
- **7º Gup (Amarillo punta Verde):** Do-San Tul (24 movimientos) + Defensas de patadas básicas.
- **6º Gup (Verde):** Won-Hyo Tul (28 movimientos) + Ibo Matsogi (combate a 2 pasos).
- **5º Gup (Verde punta Azul):** Yul-Gok Tul (38 movimientos) + Técnicas de codo y rodilla.
- **4º Gup (Azul):** Joong-Gun Tul (32 movimientos) + Ilbo Matsogi y rotura básica.
- **3º Gup (Azul punta Roja):** Toi-Gye Tul (37 movimientos) + Combate semi-libre.
- **2º Gup (Rojo):** Hwa-Rang Tul (29 movimientos) + Jayu Matsogi y defensa personal.
- **1º Gup (Rojo punta Negra):** Choong-Moo Tul (30 movimientos) + Rotura de potencia, combate libre y tesis teórica para 1º Dan.`,
      },
      {
        id: "jerarquia-dan",
        titulo: "3. Jerarquías de Cinturón Negro (Dan)",
        hangul: "단 체계",
        contenido: `Las graduaciones de Cinturón Negro se dividen en cuatro estamentos de responsabilidad docente y marcial:

- **1º a 3º Dan (Boo Sabum Nim - Asistente de Instructor):** Dominio técnico refinado y capacidad pedagógica para asistir en las clases.
- **4º a 6º Dan (Sabum Nim - Instructor Internacional):** Requiere certificación formal mediante International Instructor Course (IIC). Facultad para examinar grados Gup y presidir doyangs.
- **7º y 8º Dan (Sahyun Nim - Maestro):** Guía filosófico y técnico de la federación. Dedicación de vida al arte marcial.
- **9º Dan (Saseong Nim - Gran Maestro):** Máxima jerarquía honorífica y técnica en la International Taekwon-Do Federation.`,
      },
    ],
  },
  {
    slug: "competicion",
    titulo: "Reglamento Oficial de Competición y Arbitraje ITF",
    subtitulo: "Criterios de puntuación, faltas reglamentarias, pesaje y código de jueces FECHITAT.",
    icono: "⚖️",
    badge: "campeonato",
    extracto: "Consulta las normas oficiales de competencia para combate deportivo (Matsogi), formas (Tul), roturas y el sistema de arbitraje homologado por la ITF.",
    tiempoLectura: "14 min de lectura",
    pdfNombre: "Reglamento-Oficial-Competicion-ITF.pdf",
    pdfUrl: "/documentos",
    secciones: [
      {
        id: "puntuacion-matsogi",
        titulo: "1. Sistema de Puntuación en Combate (Matsogi)",
        hangul: "맞서기 점수",
        contenido: `El combate en Taekwon-Do ITF se puntúa según la dificultad biomecánica de la técnica y la zona de impacto legal (desde la cintura hacia arriba, torso y cabeza cubiertos por protecciones homologadas):`,
        items: [
          {
            termino: "1 Punto",
            hangul: "1점",
            significado: "Técnica de mano legal",
            detalle: "Golpe de puño ejecutado con potencia, equilibrio y retracción hacia la zona media (torso) o zona alta (cabeza).",
          },
          {
            termino: "2 Puntos",
            hangul: "2점",
            significado: "Técnica de pie al cuerpo",
            detalle: "Patada legal que conecte limpiamente en la zona media del tronco o torso del oponente.",
          },
          {
            termino: "3 Puntos",
            hangul: "3점",
            significado: "Técnica de pie a la cabeza",
            detalle: "Cualquier patada legal efectuada con precisión sobre la cabeza o cara del adversario.",
          },
          {
            termino: "Puntos Adicionales en Salto",
            hangul: "도약 기술",
            significado: "+1 Punto en técnicas aéreas",
            detalle: "Si una patada al cuerpo se efectúa en salto suma 3 puntos; si se ejecuta a la cabeza en salto, otorga el puntaje máximo de 4 puntos.",
          },
        ],
      },
      {
        id: "advertencias-penalizaciones",
        titulo: "2. Faltas y Penalizaciones Reglamentarias",
        hangul: "감점 및 경고",
        contenido: `El árbitro central vela por la integridad física de los atletas aplicando sanciones escalonadas:

1. **Advertencias (Chui):** Por faltas menores como pisar fuera del tatami con ambos pies, dar la espalda deliberadamente, caer intencionalmente, simular lesión o hablar durante el asalto. Tres advertencias (Chui) equivalen a la deducción automática de 1 punto (Gamjeom).
2. **Puntos en Contra (Gamjeom):** Por contacto excesivo no controlado, insultos al juez o al rival, golpear en zonas prohibidas (ej. espalda, nuca o bajo la cintura) o desobedecer órdenes directas del árbitro.
3. **Descalificación (Silgyuk):** Por conducta antideportiva grave, golpear deliberadamente con intención de dañar o acumular tres puntos en contra (Gamjeom) en un mismo combate.`,
      },
      {
        id: "criterios-tul",
        titulo: "3. Criterios de Evaluación en Formas (Tul)",
        hangul: "틀 심사 기준",
        contenido: `En las competencias de Tul, dos atletas compiten en forma simultánea frente a una mesa de 5 jueces que evalúan:

- **Contenido Técnico (Técnica):** Altura correcta de golpes y defensas, trayectorias correctas y postura corporal exacta.
- **Poder (Him):** Velocidad y masa corporal aplicada en cada bloqueo o golpe sin rigidez muscular innecesaria.
- **Ritmo y Sine Wave:** Ejecución armoniosa de la onda sinusoidal (Abajo-Arriba-Abajo) respetando los tiempos de cada movimiento.
- **Equilibrio:** Estabilidad inalterable al girar, desplazarse y fijar las posiciones.
- **Control de la Respiración:** Sonido breve y limpio en el instante final de la técnica.`,
      },
      {
        id: "cuerpo-arbitral",
        titulo: "4. Estructura de la Mesa y Jueces Oficiales",
        hangul: "심판진",
        contenido: `Cada área de combate (Ring de 8x8 metros o 9x9 metros) está supervisada por:

- **Presidente de Mesa (Jury President):** Supervisa el cumplimiento de las bases y revisa impugnaciones.
- **Árbitro Central de Tatami (Ring Referee):** Conduce el combate, previene lesiones, sanciona faltas y declara al ganador.
- **4 Jueces de Esquina:** Asignados en cada vértice del cuadrilátero; registran electrónicamente los puntos limpios de forma independiente.
- **Cronometrista y Anotador Oficial:** Controlan los tiempos reglamentarios (2 asaltos de 2 minutos por 1 minuto de descanso).`,
      },
    ],
  },
];

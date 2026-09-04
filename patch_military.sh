sed -i '448,476c\
      <img\
        src={product.cardImage}\
        alt={product.title.replace(\
          "\\n",\
          " "\
        )}\
        loading="lazy"\
        decoding="async"\
        draggable={false}\
        className="\
          absolute\
          inset-0\
          h-full\
          w-full\
          object-cover\
          object-center\
\
          transition-transform\
          duration-[1400ms]\
          ease-[cubic-bezier(0.16,1,0.3,1)]\
\
          group-hover:scale-[1.04]\
        "\
      />
' src/components/MilitaryShoe.tsx

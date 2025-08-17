import React = require('react');

export function TypographyH1(props: { children: React.ReactNode }) {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      {props.children}
    </h1>
  );
}

export function TypographyH2(props: { children: React.ReactNode }) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {props.children}
    </h2>
  );
}

export function TypographyH3(props: { children: React.ReactNode }) {
  return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{props.children}</h3>;
}

export function TypographyH4(props: { children: React.ReactNode }) {
  return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{props.children}</h4>;
}

export function TypographyP(props: { children: React.ReactNode }) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{props.children}</p>;
}

export function TypographyBlockquote(props: { children: React.ReactNode }) {
  return <blockquote className="mt-6 border-l-2 pl-6 italic">{props.children}</blockquote>;
}

"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
  KBarResults,
  useMatches,
} from "kbar";

export default function CommandBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const actions = [
    {
      id: "copy",
      name: "Copiar URL",
      shortcut: ["u"],
      keywords: "copy-url",
      section: "Geral",
      perform: () => navigator.clipboard.writeText(window.location.href),
    },
    {
      id: "create-user",
      name: "Criar Usuário",
      keywords: "create-user",
      section: "Geral",
      perform: () => router.push("/users/new"),
    },
    {
      id: "home",
      name: "Home",
      shortcut: ["g", "h"],
      keywords: "go-home",
      section: "Ir Para",
      perform: () => router.push("/"),
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="fixed flex items-start justify-center w-full inset-0 p-[14vh_16px_16px] bg-[#000000cc] box-border">
          <KBarAnimator className="bg-[#ffffff0d] max-w-[600px] w-full rounded-lg overflow-hidden text-[#f2f2f2]">
            <KBarSearch
              className="p-[12px_16px] text-[16px] w-full box-border outline-none border-none m-0 bg-[#ffffff0d] text-[#f2f2f2]"
              defaultPlaceholder="Digite um comando ou pesquise..."
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="p-[8px_16px] text-[10px] uppercase bg-[#ffffff0d]  ">
            {item}
          </div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  );
}

const ResultItem = React.forwardRef(({ action, active }: any, ref: any) => {
  return (
    <div ref={ref} style={getResultStyle(active)}>
      <div className="flex gap-2 items-center">
        <div className="flex flex-col">
          <span>{action.name}</span>
        </div>
      </div>
      {action.shortcut?.length ? (
        <div aria-hidden className="grid grid-flow-col gap-1">
          {action.shortcut.map((shortcut: any) => (
            <kbd
              key={shortcut}
              className="bg-[#ffffff1a] p-[4px_8px] text-[#8f9ba8] uppercase"
            >
              {shortcut}
            </kbd>
          ))}
        </div>
      ) : null}
    </div>
  );
});

ResultItem.displayName = "MyComponent";

const getResultStyle = (active: boolean) => {
  return {
    padding: "12px 16px",
    background: active ? "rgba(255, 255, 255, 0.1)" : "#ffffff0d",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0,
    cursor: "pointer",
    color: active ? "#f2f2f2" : "#8f9ba8",
  };
};

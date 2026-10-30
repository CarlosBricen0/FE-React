import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
export interface CreatorPostCardProps {
  creator: { name: string; image: string | null }; date: string; text: string; locked?: boolean;
  media?: React.ReactNode; membershipAction?: React.ReactNode; actions?: React.ReactNode; adminAction?: React.ReactNode;
}
export function CreatorPostCard({ creator, date, text, locked, media, membershipAction, actions, adminAction }: CreatorPostCardProps) {
  return <article className="flex flex-col gap-3 p-4 border-t">
    <header className="flex items-center justify-between gap-3"><div className="flex items-center gap-2"><Avatar><AvatarImage src={creator.image || undefined} alt="" /><AvatarFallback>{creator.name[0]}</AvatarFallback></Avatar><span className="font-semibold">{creator.name}</span></div><div className="flex items-center gap-2"><time className="text-xs text-muted-foreground">{date}</time>{adminAction}</div></header>
    <p className="whitespace-pre-wrap break-words">{text}</p>
    {locked ? <div className="rounded-lg min-h-64 bg-slate-800 text-white flex flex-col items-center justify-center gap-6 p-8"><span aria-hidden="true" className="text-4xl">🔒</span><p>Exclusive members-only content</p>{membershipAction}</div> : media}
    <footer className="flex items-center gap-5">{actions}</footer>
  </article>;
}

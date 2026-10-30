import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
export function ProductTile({ name, price, image, action, status = 'In stock' }: { name: string; price: string; image: React.ReactNode; action: React.ReactNode; status?: string }) {
  return <Card className="flex flex-col"><CardHeader className="flex flex-row items-center justify-between gap-2"><CardTitle className="text-lg">{name}</CardTitle><span className="text-sm whitespace-nowrap">{price}</span></CardHeader><CardContent className="flex flex-col flex-1 gap-6">{image}<div className="mt-auto">{action}</div><p className="text-sm text-muted-foreground">{status}</p></CardContent></Card>;
}

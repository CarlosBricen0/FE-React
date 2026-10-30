import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
export function MetricCard({ title, value }: { title: string; value: string | number }) {
  return <Card><CardHeader><CardTitle className="text-sm font-medium">{title}</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{value}</p></CardContent></Card>;
}

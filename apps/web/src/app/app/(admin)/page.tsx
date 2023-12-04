"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Container from "@/components/Container"
import { Overview } from "@/components/Overview"

const data = [
  {
    revenue: 0,
  },
  {
    revenue: 10400,
  },
  {
    revenue: 500,
  },
  {
    revenue: 1000,
  },
  {
    revenue: 11000,
  },
]

export default function DashboardPage() {
  return (
    <Container title="Home" subtitle="Home Root">
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((pageSize) => (
            <Card key={pageSize}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
                <div className="h-[80px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={data}
                      margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 0,
                      }}
                    >
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                      Average
                                    </span>
                                    <span className="font-bold text-muted-foreground">
                                      {payload[0]?.value}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )
                          }

                          return null
                        }}
                      />
                      <Line
                        type="monotone"
                        strokeWidth={2}
                        dataKey="revenue"
                        activeDot={{
                          r: 6,
                          style: { fill: "#841", opacity: 1 },
                        }}
                        style={
                          {
                            stroke: "#841",
                          } as React.CSSProperties
                        }
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {[1, 2].map((pageSize) => (
            <Card key={pageSize} className="col-span-6">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  )
}

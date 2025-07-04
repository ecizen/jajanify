"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";

const mockData = [10, 25, 40, 30, 50, 20, 15, 5, 18, 22, 37, 28, 45, 30];

const MIN = 3200;
const MAX = 206000;
const BIN_COUNT = mockData.length;
const BIN_WIDTH = Math.floor((MAX - MIN) / BIN_COUNT);

export default function PriceRangeSelector() {
  const [range, setRange] = useState([MIN, MAX]);
  const [clientRendered, setClientRendered] = useState(false);

  useEffect(() => {
    setClientRendered(true);
  }, []);

  return (
    <Card className="w-full max-w-md  shadow-none p-0 border-0">
      <CardContent className="space-y-4 px-0">
        <div className="text-md font-medium">Price Range</div>
        {clientRendered ? (
          <div className="text-muted-foreground text-sm">
            ${range[0].toLocaleString()} - ${range[1].toLocaleString()}
          </div>
        ) : (
          <div className="text-muted-foreground text-sm">Loading...</div>
        )}

        <div className="relative h-20 bg-white px-0 py-2 rounded overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 flex items-end h-full">
            {mockData.map((value, i) => {
              const binStart = MIN + i * BIN_WIDTH;
              const binEnd = binStart + BIN_WIDTH;
              const isInRange = binEnd >= range[0] && binStart <= range[1];

              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: isInRange ? "#206EFF" : "#DBF3FF",
                    height: `${(value / Math.max(...mockData)) * 100}%`,
                    width: `${100 / mockData.length}%`,
                  }}
                ></div>
              );
            })}
          </div>
        </div>

        <Slider
          defaultValue={[MIN, MAX]}
          min={MIN}
          max={MAX}
          step={1000}
          onValueChange={setRange}
        />
      </CardContent>
    </Card>
  );
}

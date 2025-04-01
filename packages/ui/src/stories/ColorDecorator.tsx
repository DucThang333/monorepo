import React, { useEffect } from "react";

type ColorDecoratorProps = {
  primary?: string;
  primaryLight?: string;
  primaryDark?: string;
  primaryForeground?: string;
  secondary?: string;
  secondaryLight?: string;
  secondaryDark?: string;
  secondaryForeground?: string;
  accent?: string;
  accentLight?: string;
  accentDark?: string;
  accentForeground?: string;
  destructive?: string;
  destructiveLight?: string;
  destructiveDark?: string;
  destructiveForeground?: string;
  background?: string;
};

export const ColorDecorator = (props: ColorDecoratorProps) => {
  const style = document.documentElement.style;
  const {
    primary,
    primaryLight,
    primaryDark,
    primaryForeground,
    secondary,
    secondaryLight,
    secondaryDark,
    secondaryForeground,
    accent,
    accentLight,
    accentDark,
    accentForeground,
    destructive,
    destructiveLight,
    destructiveDark,
    destructiveForeground,
    background,
  } = props;
  useEffect(() => {
    style.setProperty(
      "--color-primary",
      primary || style.getPropertyValue("--color-primary")
    );
  }, [primary]);
  useEffect(() => {
    style.setProperty(
      "--color-primary-light",
      primaryLight || style.getPropertyValue("--color-primary-light")
    );
  }, [primaryLight]);
  useEffect(() => {
    style.setProperty(
      "--color-primary-dark",
      primaryDark || style.getPropertyValue("--color-primary-dark")
    );
  }, [primaryDark]);
  useEffect(() => {
    style.setProperty(
      "--color-primary-foreground",
      primaryForeground || style.getPropertyValue("--color-primary-foreground")
    );
  }, [primaryForeground]);
  useEffect(() => {
    style.setProperty(
      "--color-secondary",
      secondary || style.getPropertyValue("--color-secondary")
    );
  }, [secondary]);
  useEffect(() => {
    style.setProperty(
      "--color-secondary-light",
      secondaryLight || style.getPropertyValue("--color-secondary-light")
    );
  }, [secondaryLight]);
  useEffect(() => {
    style.setProperty(
      "--color-secondary-dark",
      secondaryDark || style.getPropertyValue("--color-secondary-dark")
    );
  }, [secondaryDark]);
  useEffect(() => {
    style.setProperty(
      "--color-secondary-foreground",
      secondaryForeground ||
        style.getPropertyValue("--color-secondary-foreground")
    );
  }, [secondaryForeground]);
  useEffect(() => {
    style.setProperty(
      "--color-accent",
      accent || style.getPropertyValue("--color-accent")
    );
  }, [accent]);
  useEffect(() => {
    style.setProperty(
      "--color-accent-light",
      accentLight || style.getPropertyValue("--color-accent-light")
    );
  }, [accentLight]);
  useEffect(() => {
    style.setProperty(
      "--color-accent-dark",
      accentDark || style.getPropertyValue("--color-accent-dark")
    );
  }, [accentDark]);
  useEffect(() => {
    style.setProperty(
      "--color-accent-foreground",
      accentForeground || style.getPropertyValue("--color-accent-foreground")
    );
  }, [accentForeground]);
  useEffect(() => {
    style.setProperty(
      "--color-destructive",
      destructive || style.getPropertyValue("--color-destructive")
    );
  }, [destructive]);
  useEffect(() => {
    style.setProperty(
      "--color-destructive-light",
      destructiveLight || style.getPropertyValue("--color-destructive-light")
    );
  }, [destructiveLight]);
  useEffect(() => {
    style.setProperty(
      "--color-destructive-dark",
      destructiveDark || style.getPropertyValue("--color-destructive-dark")
    );
  }, [destructiveDark]);
  useEffect(() => {
    style.setProperty(
      "--color-destructive-foreground",
      destructiveForeground ||
        style.getPropertyValue("--color-destructive-foreground")
    );
  }, [destructiveForeground]);
  useEffect(() => {
    style.setProperty(
      "--color-background",
      background || style.getPropertyValue("--color-background")
    );
  }, [background]);
  return (
    <div className="grid gap-4 grid-cols-3">
      <div className="text-center text-sm font-semibold">
        <div className="min-w-60 min-h-8 bg-primary-light">
          <div className="text-primary-foreground text-sm leading-8 text-center">
            primary light
          </div>
        </div>
        <div className="min-w-60 min-h-8 bg-primary">
          <p className="text-primary-foreground text-sm leading-8 text-center">
            primary
          </p>
        </div>
        <div className="min-w-60 min-h-8 bg-primary-dark">
          <div className="text-primary-foreground text-sm leading-8 text-center">
            primary dark
          </div>
        </div>
        <div className="min-w-60 min-h-8 bg-primary-foreground">
          <div className="text-black text-sm leading-8 text-center">
            primary foreground
          </div>
        </div>
      </div>
      <div className="text-center text-sm font-semibold">
        <div className="min-w-60 min-h-8 bg-secondary-light">
          <div className="text-secondary-foreground text-sm leading-8 text-center">
            secondary light
          </div>
        </div>
        <div className="min-w-60 min-h-8 bg-secondary">
          <div className="text-secondary-foreground text-sm leading-8 text-center">
            secondary
          </div>
        </div>
        <div className="min-w-60 min-h-8 bg-secondary-dark">
          <div className="text-secondary-foreground text-sm leading-8 text-center">
            secondary dark
          </div>
        </div>
        <div className="min-w-60 min-h-8 bg-secondary-foreground">
          <div className="text-black text-sm leading-8 text-center">
            secondary foreground
          </div>
        </div>
      </div>
      <div className="text-center text-sm font-semibold">
        <div className="min-w-60 min-h-8 bg-accent-light">
          <div className="text-accent-foreground text-sm leading-8 text-center">
            accent light
          </div>
        </div>
        <div className="min-w-60 min-h-8 bg-accent">
          <div className="text-accent-foreground text-sm leading-8 text-center">
            accent
          </div>
        </div>
        <div className="min-w-60 min-h-8 bg-accent-dark">
          <div className="text-accent-foreground text-sm leading-8 text-center">
            accent dark
          </div>
        </div>
        <div className="min-w-60 min-h-8 bg-accent-foreground">
          <div className="text-black text-sm leading-8 text-center">
            accent foreground
          </div>
        </div>
      </div>
      <div className="text-center text-sm font-semibold">
        <div className="min-w-60 min-h-8 bg-destructive-light">
          <div className="text-destructive-foreground text-sm leading-8 text-center">
            destructive light
          </div>
        </div>
        <div className="min-w-60 min-h-8 bg-destructive">
          <div className="text-destructive-foreground text-sm leading-8 text-center">
            destructive
          </div>
        </div>
        <div className="min-w-60 min-h-8 bg-destructive-dark">
          <div className="text-destructive-foreground text-sm leading-8 text-center">
            destructive dark
          </div>
        </div>
        <div className="min-w-60 min-h-8 bg-destructive-foreground">
          <div className="text-black text-sm leading-8 text-center">
            destructive foreground
          </div>
        </div>
      </div>
      <div className="min-w-60 min-h-8 bg-background ">
        <div className="text-black text-sm leading-8 text-center">
          background
        </div>
      </div>
    </div>
  );
};

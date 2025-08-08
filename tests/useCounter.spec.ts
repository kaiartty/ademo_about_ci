import { renderHook, act } from "@testing-library/react";
import useCounter from "../src/hooks/features/homepage/useCounter";

describe("useCounter", () => {
  it("initializes count to 0 and val to 1", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it("increments count by val", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it("updates val and increments by new val", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(3);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(3);
    expect(result.current.val).toBe(3);
  });

  it("increments multiple times", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(3);
  });

  it("setVal does not affect count until increment is called", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(10);
    });
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(10);
  });
});

import { Checklist } from './checklist';

describe('Checklist', () => {
  it('should create an instance', () => {
    expect(new Checklist()).toBeTruthy();
  });

  it('should accept values in constructor',() => {
    let checklist = new Checklist({
      id: 1,
      title: "welcome",
      complete: true
    });

  expect(checklist.id).toEqual(1);
  expect(checklist.title).toEqual("welcome");
  expect(checklist.complete).toEqual(true);
  });
});

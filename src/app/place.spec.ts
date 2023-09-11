import { Place } from './place';

describe('Place', () => {
  it('should create an instance', () => {
    const place = new Place(
      1,
      'name',
      'imageURL',
      'description',
      'contact',
    );

    expect(place).toBeTruthy();
  });
});